import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import {getTable, getUser, listBoardGames, listTables, listVenues} from "@/graphql/queries";
import {createTable, createVenue, updateTable} from "@/graphql/mutations";
import {Authenticator} from "@aws-amplify/ui-react";
import {Table, Venue} from "@/API";
import {NextPageContext} from "next";

import awsExports from "../../aws-exports";
import {useParams} from "next/navigation";
import {useRouter} from "next/router";
import {useState} from "react";

Amplify.configure({ ...awsExports, ssr: true });

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps( req?: any ) {
    const SSR = req.cookie ? withSSRContext({ req }) : withSSRContext();

    try {
        const tableResponse = await SSR.API.graphql({
            query: getTable,
            variables: {id: req.params.id},
            authMode: 'API_KEY',
        });

        const gameResponse = await SSR.API.graphql({ query: listBoardGames, authMode: 'API_KEY' });

        return {
            props: {
                table: tableResponse.data.getTable,
                boardGames: gameResponse.data.listBoardGames.items
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default function Table({ table, boardGames = [] } : any) {
    console.log(JSON.stringify(table))
    const [selectedGame, setSelectedGame] = useState<string | undefined>(table.games ? table.games.id : undefined); // Initialize with the current value
    const router = useRouter()

    async function handleUpdateTable(event: any) {
        event.preventDefault();

        console.log(JSON.stringify(router))

        const form = new FormData(event.target);

        try {
            const { data } = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: updateTable,
                variables: {
                    input: {
                        id: router.query.id,
                        number: parseFloat(form.get('number') as string),
                        capacity: parseFloat(form.get('capacity') as string),
                        tableGamesId: selectedGame
                    }
                }
            }) as { data: any };
        } catch (error: any) {
            if (error.errors) {
                console.error(...error.errors);
                throw new Error(error.errors[0].message);
            } else {
                console.error(error);
                throw new Error("An error occurred");
            }
        }
    }

    return (
        <div>
            <main className={`${inter.className}`}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Authenticator>
                            <h3 className="text-lg font-semibold">Table {table.number}</h3>
                            <form className="space-y-2" onSubmit={handleUpdateTable}>
                                <div>
                                    <label className="block font-medium" htmlFor="number">
                                        Number
                                    </label>
                                    <input
                                        className="border rounded px-2 py-1 w-full"
                                        type="text"
                                        id="number"
                                        name="number"
                                        defaultValue={table.number}
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="capacity">
                                        Capacity
                                    </label>
                                    <input
                                        className="border rounded px-2 py-1 w-full"
                                        type="number"
                                        id="capacity"
                                        name="capacity"
                                        defaultValue={table.capacity}
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="games">
                                        Board Game
                                    </label>
                                    <select
                                        className="border rounded px-2 py-1 w-full"
                                        id="games"
                                        name="games"
                                        value={selectedGame}
                                        onChange={(e) => setSelectedGame(e.target.value)}
                                    >
                                        <option value="">Select a game</option>
                                        {boardGames.map((game: any) => (
                                            <option key={game.id} value={game.id}>
                                                {game.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Update Table
                                </button>
                            </form>
                        </Authenticator>
                    </div>
                </div>
            </main>
        </div>
    );
}
