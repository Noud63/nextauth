import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

const Nav = async () => {

  const session = await getServerSession(options)
 console.log(session?.user.name)

  return (
    <header className="bg-gradient-to-r from-slate-400 to-black text-gray-100 border-b border-black headerShadow">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>
          <Link href="/" className="text-black">
            NextAuth.js
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
          {session ? (
            <>
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
              <div><h3 className="font-bold">Hi, {session.user.name}</h3></div>
            </>
          ) : (
            <Link href="/api/auth/signin?callbackUrl=/">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav
