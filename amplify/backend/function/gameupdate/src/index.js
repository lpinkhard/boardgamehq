/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["bga_client_id"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_BOARDGAMEHQ_GRAPHQLAPIENDPOINTOUTPUT
	API_BOARDGAMEHQ_GRAPHQLAPIIDOUTPUT
	API_BOARDGAMEHQ_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const Sentry = require("@sentry/serverless");
const aws = require('aws-sdk');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const apiGraphQLAPIIdOutput = process.env.API_BOARDGAMEHQ_GRAPHQLAPIIDOUTPUT;
const environment = process.env.ENV;
const boardGameTable = `BoardGame-${apiGraphQLAPIIdOutput}-${environment}`;

const documentClient = new aws.DynamoDB.DocumentClient();

const yearThreshold = 1880;
const limitCount = 10000000;
let currentPage = 0;
let year = new Date().getFullYear();
let lastCount = limitCount;

Sentry.AWSLambda.init({
    dsn: "https://509797279a334837b2123f7c0b76dc98@o4505493834563584.ingest.sentry.io/4505494618505216",
    tracesSampleRate: 1.0,
});

/**
 * Fetches game data from Board Game Atlas API.
 *
 * @param page - Page to retrieve
 *
 * @returns - Game data
 *
 */
async function fetchGameData(page) {
    const { Parameters } = await (new aws.SSM())
        .getParameters({
            Names: ["bga_client_id"].map(secretName => process.env[secretName]),
            WithDecryption: true,
        })
        .promise();
    const clientId = Parameters[0].Value;
    const skip = (page - 1) * 100;
    let url;

    // Too few games below threshold, get them all
    if (year <= yearThreshold) {
        url = `https://api.boardgameatlas.com/api/search?lt_year_published=${year}&limit=100&skip=${skip}&fields=id,name,description,min_players,max_players,min_playtime,max_playtime,image_url&order_by=rank&client_id=${clientId}`;
    } else {
        url = `https://api.boardgameatlas.com/api/search?year_published=${year}&limit=100&skip=${skip}&fields=id,name,description,min_players,max_players,min_playtime,max_playtime,image_url&order_by=rank&client_id=${clientId}`;
    }

    const response = await axios.get(url);

    const games = response.data.games;
    lastCount = response.data.count;

    const data = [];

    // Process the retrieved game data
    for (const game of games) {
        data.push({
            bgaId: game.id,
            name: game.name,
            description: game.description,
            minPlayers: game.min_players,
            maxPlayers: game.max_players,
            minPlaytime: game.min_playtime,
            maxPlaytime: game.max_playtime,
            imageUrl: game.image_url
        });
    }

    return data;
}

/**
 * Updates game data in DynamoDB
 *
 * @param data - Array of game data
 *
 * @returns - Game data
 *
 */
async function updateGameData(data) {
    const queryParams = {
        TableName: boardGameTable,
        IndexName: 'boardGamesByBgaId',
        KeyConditionExpression: 'bgaId = :bgaId',
        ExpressionAttributeValues: {},
        ProjectionExpression: 'id',
    };

    const putParams = {
        TableName: boardGameTable,
        Item: {},
    };

    // Update or insert all games in the data set
    for (const game of data) {
        try {
            queryParams.ExpressionAttributeValues = {
                ':bgaId': game.bgaId,
            };

            const queryResult = await documentClient.query(queryParams).promise();

            if (queryResult.Count > 0) {
                // Game exists, update the item
                const gameId = queryResult.Items[0].id;

                const updateParams = {
                    TableName: boardGameTable,
                    Key: {
                        id: gameId,
                    },
                    UpdateExpression: 'SET #name = :name, description = :description, minPlayers = :minPlayers, maxPlayers = :maxPlayers, minPlaytime = :minPlaytime, maxPlaytime = :maxPlaytime, imageUrl = :imageUrl, updatedAt = :updatedAt',
                    ExpressionAttributeNames: {
                        '#name': 'name',
                    },
                    ExpressionAttributeValues: {
                        ':name': game.name,
                        ':description': game.description,
                        ':minPlayers': game.minPlayers,
                        ':maxPlayers': game.maxPlayers,
                        ':minPlaytime': game.minPlaytime,
                        ':maxPlaytime': game.maxPlaytime,
                        ':imageUrl': game.imageUrl,
                        ':updatedAt': new Date().toISOString()
                    },
                    ReturnValues: 'ALL_NEW',
                };

                await documentClient.update(updateParams).promise();
            } else {
                // Game does not exist, insert a new item
                putParams.Item = {
                    id: uuidv4(),
                    bgaId: game.bgaId,
                    name: game.name,
                    description: game.description,
                    minPlayers: game.minPlayers,
                    maxPlayers: game.maxPlayers,
                    minPlaytime: game.minPlaytime,
                    maxPlaytime: game.maxPlaytime,
                    imageUrl: game.imageUrl,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                };

                await documentClient.put(putParams).promise();
            }
        } catch (err) {
            console.log('Error', err);
        }
    }
}

async function handleProgression() {
    const skip = (currentPage - 1) * 100;

    // Nothing to fetch next time, go back in history
    if (skip >= lastCount || skip >= 1000) {
        lastCount = limitCount;
        year--;
        currentPage = 0;

        // Year threshold reached, go back to present
        if (year < yearThreshold) {
            year = new Date().getFullYear();
        }
    }
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = Sentry.AWSLambda.wrapHandler(async (event) => {
    try {
        const games = await fetchGameData(++currentPage);
        if (games.length > 0) {
            await updateGameData(games);
        }

        await handleProgression();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Update success',
            }),
        };
    } catch (err) {
        Sentry.captureException(err);
        console.log('Error', err);

        await handleProgression();

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }
});
