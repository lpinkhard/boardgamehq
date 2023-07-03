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

import { DynamoDB, SSM } from 'aws-sdk';
import axios from 'axios';

const apiGraphQLAPIIdOutput = process.env.API_BOARDGAME_GRAPHQLAPIIDOUTPUT;
const environment = process.env.ENV;
const boardGameTable = `BoardGame-${apiGraphQLAPIIdOutput}-${environment}`;

const documentClient = new DynamoDB.DocumentClient();

let currentPage = 0;

const { Parameters } = await (new SSM())
    .getParameters({
        Names: ["bga_client_id"].map(secretName => process.env[secretName]),
        WithDecryption: true,
    })
    .promise();

/**
 * Fetches game data from Board Game Atlas API.
 *
 * @param page - Page to retrieve
 *
 * @returns - Game data
 *
 */
async function fetchGameData(page) {
    const clientId = Parameters[0].Value;
    const skip = (page - 1) * 100;
    const url = `https://api.boardgameatlas.com/api/search?limit=100&skip=${skip}&fields=id,name,description,min_players,max_players,category,image_url&client_id=${clientId}`;
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
    const putParams = {
        TableName: boardGameTable,
        Item: {},
    };

    // Update all games in the data set
    for (const game of data) {
        putParams.Item = {
            bga_id: game.bgaId,
            name: game.name,
            description: game.description,
            minPlayers: game.minPlayers,
            maxPlayers: game.maxPlayers,
            imageUrl: game.imageUrl,
        };

        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
            await documentClient.put(putParams);
        } catch (err) {
            console.log(err);
        }
    }
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
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
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: err,
            }),
        };
    }
};
