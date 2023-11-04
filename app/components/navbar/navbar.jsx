import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className='w-full mmd:border-t'>

     <ul className='w-full flex justify-center items-center h-24 bg-blackk opacity-70  
      text-slate-100 pl-10 font-semibold mmd:opacity-80 '>
      <li className='px-2 tracking-wide'>
        <Link href="/" className='hover:text-slate-300 transition uppercase'>Home</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/about"  className='whitespace-nowrap hover:text-slate-300 transition uppercase '>About us</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/menu" className='hover:text-slate-300 transition uppercase '>Menu</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/#kartal"  className='hover:text-slate-300 transition uppercase scroll-smooth'>Reviews</Link>
      </li>
 
      <li className='px-2 tracking-wide'>
        <Link href="/contact" className='hover:text-slate-300 transition uppercase'>Contact</Link>
      </li>
  
     </ul>

    </nav>
  )
}

export default Navbar