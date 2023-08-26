import { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
import {Auth} from "aws-amplify";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`flex min-h-screen flex-col items-center p-24`}>
      <header className={`flex flex-col items-center p-24`}>
        <Link href="/"><h1 className="text-3xl font-bold mb-8">Boardgame HQ</h1></Link>
        <button
          type="button"
          onClick={() => Auth.signOut()}
          className="text-blue-500 hover:underline"
        >
          Sign out
        </button>
      </header>
      <Main />
        <NextScript />
      </body>
    </Html>
  )
}
