import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const Member = async () => {

  const session = await getServerSession(options)  // Only server side

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/Member") //redirect back to member page after login
  }

  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session?.user.email}</p>
      <p>{session?.user.role}</p>
      </div>
  )
}

export default Member
