import React from 'react'
import Image from "next/image";
import Link from "next/link";
import NavInOut from '../navInOut/navInOut';

function NavMnenu() {
  return (
<div className="flex  gap-0 h-80   ">
    <div
      className='bg-blackk flex-1 relative after:content-[""] after:absolute  
          after:w-12  after:h-80  after:bg-blackk after:z-10 after:top-0 after:right-0 after:-skew-x-6 
          after:origin-bottom-right xs:hidden '
    >
      <Link href="/">
          <Image
        src="/log.png"
        width={150}
        height={150}
        alt="logo"
        className="rounded-full opacity-90 mx-auto my-8 mb-4 "
      />
      </Link>
  
      <h1 className="text-2xl uppercase font-semibold text-white w-full  text-center px-4 mb-4 sm:text-xl">
        The echoes kitchen
      </h1>
    


<NavInOut />



    </div>

    <div className=" bg-menu-banner  flex-1  bg-cover relative text-right p-8 ">
      <Link
        className="text-slate-200 transition   bg-gray-600 hover:bg-gray-700  opacity-70 p-2 px-3 tracking-wide rounded "
        href="/"
      >
        Home
      </Link>
    </div>
  </div>
  )
}

export default NavMnenu