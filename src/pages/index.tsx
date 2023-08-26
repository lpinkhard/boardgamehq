import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import {getUser, listBookings, listVenues} from "@/graphql/queries";
import {createVenue} from "@/graphql/mutations";
import {Authenticator} from "@aws-amplify/ui-react";
import {Booking, Venue} from "@/API";
import {NextPageContext} from "next";

import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps( req?: any ) {
  const SSR = req.cookie ? withSSRContext({ req }) : withSSRContext();

  try {
    const venuesResponse = await SSR.API.graphql({ query: listVenues, authMode: 'API_KEY' });
    const bookingsResponse = await SSR.API.graphql({ query: listBookings, authMode: 'API_KEY' });
    return {
      props: {
        venues: venuesResponse.data.listVenues.items,
        bookings: bookingsResponse.data.listBookings.items
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}

async function handleCreateVenue(event: any) {
  event.preventDefault();

  const form = new FormData(event.target);

  try {
    const currentUser = await Auth.currentAuthenticatedUser();

    const { data } = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createVenue,
      variables: {
        input: {
          name: form.get('name'),
          latitude: parseFloat(form.get('latitude') as string),
          longitude: parseFloat(form.get('longitude') as string),
          userVenuesId: currentUser.attributes.sub
        }
      }
    }) as { data: any };

    window.location.href = `/venues/${data.createVenue.id}`;
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

export default function Home({ venues = [], bookings = [] }) {
  return (
      <div>
        <main className={`${inter.className}`}>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Bookings</h3>
            <ul>
              {bookings.map((booking: Booking) => (
                  <li key={booking.id}>
                    {booking.venue.name} - {new Date(booking.timeslot.startTime).toLocaleString()}
                  </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold">Venues</h3>
            <ul>
            {venues.map((venue: Venue) => (
                <li key={venue.id}><Link className="text-blue-500 hover:underline" href={`/venues/${venue.id}`} key={venue.id}>
                  {venue.name}
                </Link></li>
            ))}
            </ul>

            <div className="space-y-2">
              <Authenticator>
                <h3 className="text-lg font-semibold">New Venue</h3>
                <form className="space-y-2" onSubmit={handleCreateVenue}>
                  <div>
                    <label className="block font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                        className="border rounded px-2 py-1 w-full"
                        type="text"
                        id="name"
                        name="name"
                    />
                  </div>
                  <div>
                    <label className="block font-medium" htmlFor="latitude">
                      Latitude
                    </label>
                    <input
                        className="border rounded px-2 py-1 w-full"
                        type="number"
                        id="latitude"
                        name="latitude"
                        step="any"
                    />
                  </div>
                  <div>
                    <label className="block font-medium" htmlFor="longitude">
                      Longitude
                    </label>
                    <input
                        className="border rounded px-2 py-1 w-full"
                        type="number"
                        id="longitude"
                        name="longitude"
                        step="any"
                    />
                  </div>

                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Venue
                  </button>
                </form>
              </Authenticator>
            </div>
          </div>
        </main>
      </div>
  );
}
