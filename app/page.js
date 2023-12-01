import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex justify-end w-full max-w-[1700px] mt-20">
      <Image src="/moon.png" alt="moon" width={500} height={100} />
    </div>
  )
}

export default Home
