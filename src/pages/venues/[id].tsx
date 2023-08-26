import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import {getUser, listTables, listTimeslots, listVenues} from "@/graphql/queries";
import {createBooking, createTable, createTimeslot, createVenue} from "@/graphql/mutations";
import {Authenticator} from "@aws-amplify/ui-react";
import {Table, Timeslot, Venue} from "@/API";
import {NextPageContext} from "next";

import awsExports from "../../aws-exports";
import {useParams} from "next/navigation";
import {useRouter} from "next/router";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

Amplify.configure({ ...awsExports, ssr: true });

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps( req?: any ) {
    const SSR = req.cookie ? withSSRContext({ req }) : withSSRContext();

    try {
        const tableVariables = {
            filter: {
                venueTablesId: {
                    eq: req.params.id
                }
            }
        };
        const timeslotVariables = {
            filter: {
                venueTimeslotsId: {
                    eq: req.params.id
                }
            }
        };

        const tableResponse = await SSR.API.graphql({
            query: listTables, // Make sure listTables matches your actual GraphQL query
            variables: tableVariables, // Use variables instead of tableVariables
            authMode: 'API_KEY'
        });
        const timeslotsResponse = await SSR.API.graphql({
            query: listTimeslots, // Make sure listTimeslots matches your actual GraphQL query
            variables: timeslotVariables, // Use variables instead of timeslotVariables
            authMode: 'API_KEY'
        });

        // Logging responses to debug
        console.log('Table Response:', tableResponse);
        console.log('Timeslot Response:', timeslotsResponse);

        return {
            props: {
                tables: tableResponse.data.listTables.items,
                timeslots: timeslotsResponse.data.listTimeslots.items
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
}

export default function Venue({ tables = [], timeslots = [] }) {
    const [selectedTable, setSelectedTable] = useState<string | null>(null);
    const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null);
    const [selectedStartTime, setSelectedStartTime] = useState<Date | null>(null);
    const [selectedEndTime, setSelectedEndTime] = useState<Date | null>(null);
    const router = useRouter()

    async function handleCreateTable(event: any) {
        event.preventDefault();

        console.log(JSON.stringify(router))

        const form = new FormData(event.target);

        try {
            const { data } = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createTable,
                variables: {
                    input: {
                        number: parseFloat(form.get('number') as string),
                        capacity: parseFloat(form.get('capacity') as string),
                        venueTablesId: router.query.id
                    }
                }
            }) as { data: any };

            window.location.href = `/tables/${data.createTable.id}`;
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

    async function handleCreateTimeslot(event: any) {
        event.preventDefault();

        if (selectedStartTime == null || selectedEndTime == null) {
            return
        }

        console.log(JSON.stringify(router))

        const form = new FormData(event.target);

        try {
            const { data } = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createTimeslot,
                variables: {
                    input: {
                        startTime: selectedStartTime.toISOString(), // Convert to ISO timestamp
                        endTime: selectedEndTime.toISOString(),     // Convert to ISO timestamp
                        venueTimeslotsId: router.query.id
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

    async function handleMakeBooking() {
        if (!selectedTable || !selectedTimeslot) {
            return; // Do not proceed without selecting both table and timeslot
        }

        try {
            const currentUser = await Auth.currentAuthenticatedUser();

            const { data } = await API.graphql({
                authMode: 'AMAZON_COGNITO_USER_POOLS',
                query: createBooking,
                variables: {
                    input: {
                        userBookingsId: currentUser.attributes.sub,
                        venueBookingsId: router.query.id,
                        timeslotBookingsId: selectedTimeslot,
                        tableBookingsId: selectedTable
                    }
                }
            }) as { data: any };

            // Clear the selections after successful booking
            setSelectedTable(null);
            setSelectedTimeslot(null);

            // TODO: Perform any additional actions after successful booking here

            window.location.href = `/`;
        } catch (error: any) {
            // Handle error
            console.error(error);
        }
    }

    return (
        <div>
            <main className={`${inter.className}`}>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Tables</h3>
                    <ul>
                        {tables.map((table: Table) => (
                            <li key={table.id}>
                                <label>
                                    <input
                                        type="radio"
                                        name="table"
                                        value={table.id}
                                        checked={selectedTable === table.id}
                                        onChange={() => setSelectedTable(table.id)}
                                    />
                                    <Link className="text-blue-500 hover:underline" href={`/tables/${table.id}`} key={table.id}>
                                        Table {table.number} - {table.capacity} spaces
                                    </Link>
                                </label>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-lg font-semibold">Timeslots</h3>
                    <ul>
                        {timeslots.map((timeslot: Timeslot) => (
                            <li key={timeslot.id}>
                                <label>
                                    <input
                                        type="radio"
                                        name="timeslot"
                                        value={timeslot.id}
                                        checked={selectedTimeslot === timeslot.id}
                                        onChange={() => setSelectedTimeslot(timeslot.id)}
                                    />
                                    {new Date(timeslot.startTime).toLocaleString()} - {new Date(timeslot.endTime).toLocaleTimeString()}
                                </label>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleMakeBooking}
                        disabled={!selectedTable || !selectedTimeslot}
                    >
                        Make Booking
                    </button>

                    <div className="space-y-2">
                        <Authenticator>
                            <h3 className="text-lg font-semibold">New Table</h3>
                            <form className="space-y-2" onSubmit={handleCreateTable}>
                                <div>
                                    <label className="block font-medium" htmlFor="number">
                                        Number
                                    </label>
                                    <input
                                        className="border rounded px-2 py-1 w-full"
                                        type="text"
                                        id="number"
                                        name="number"
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
                                    />
                                </div>

                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Create Table
                                </button>
                            </form>

                            <h3 className="text-lg font-semibold">New Timeslot</h3>
                            <form className="space-y-2" onSubmit={handleCreateTimeslot}>
                                <div>
                                    <label className="block font-medium" htmlFor="startTime">
                                        Start Time
                                    </label>
                                    <DatePicker
                                        selected={selectedStartTime} // Use state variable here
                                        onChange={(date) => setSelectedStartTime(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="border rounded px-2 py-1 w-full"
                                        id="startTime"
                                        name="startTime"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="endTime">
                                        End Time
                                    </label>
                                    <DatePicker
                                        selected={selectedEndTime} // Use state variable here
                                        onChange={(date) => setSelectedEndTime(date)}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="border rounded px-2 py-1 w-full"
                                        id="endTime"
                                        name="endTime"
                                    />
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Create Timeslot
                                </button>
                            </form>
                        </Authenticator>
                    </div>
                </div>
            </main>
        </div>
    );
}
