'use client'
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
      console.log(session)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

    
        <p>Home</p>
        <Link href="/">
          <p className="logo">NextAuth.js</p>
        </Link>
        {session && ( 
          <div>
          <p>Welcome {session.user?.name}</p>
          <Link href="#" onClick={() => signOut()} className="btn-signin">
            Sign out
          </Link>
          </div>
        )}
        {!session && (
          <Link href="#" onClick={() => signIn()} className="btn-signin">
            Sign in
          </Link>
        )}
      


      

      
    </main>
  );
}
