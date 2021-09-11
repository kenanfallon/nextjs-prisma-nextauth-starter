import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/client"

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className="h-screen">
      <Head>
        <title>Next Auth Prisma</title>
      </Head>

      <main className="flex flex-col h-full items-center justify-center">

          {!session && (
            <>
              <div>Not signed in</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signIn()}>Sign in</button>
            </>
          )}
          {session && (
            <>
              <div>Signed in as {session.user.email}</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>Sign out</button>
            </>
          )}
        
      </main>
      
    </div>
  )
}
