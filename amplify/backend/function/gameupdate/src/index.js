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

let currentPage = 0;

Sentry.AWSLambda.init({
    dsn: "https://e818cb73b2014d50af1f6517b9417de4@o4505493834563584.ingest.sentry.io/4505493836333056",
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
    const url = `https://api.boardgameatlas.com/api/search?limit=100&skip=${skip}&fields=id,name,description,min_players,max_players,min_playtime,max_playtime,image_url&client_id=${clientId}`;
    const response = await axios.get(url);

    const games = response.data.games;

    const data = new Array();

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
            imageUrl: game.image_url,
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
                    UpdateExpression: 'SET #name = :name, description = :description, minPlayers = :minPlayers, maxPlayers = :maxPlayers, minPlaytime = :minPlaytime, maxPlaytime = :maxPlaytime, imageUrl = :imageUrl',
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
                };

                await documentClient.put(putParams).promise();
            }
        } catch (err) {
            console.log('Error', err);
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
        } else {
            // Start over next time
            currentPage = 0;
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Update success',
            }),
        };
    } catch (err) {
        // An error is expected if we go past the end, so report to Sentry only on first page
        if (currentPage === 0) {
            Sentry.captureException(err);
        }
        currentPage = 0;
        console.log('Error', err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }
});
