import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='w-full mmd:border-t'>

     <ul className='w-full flex justify-center items-center h-24 bg-blackk opacity-70  
      text-slate-100 pl-10 font-semibold mmd:opacity-80 '>
      <li className='px-2 tracking-wide'>
        <Link href="/" className='hover:text-slate-300 transition'>Home</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/about" className='whitespace-nowrap hover:text-slate-300 transition '>About us</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/menu" className='hover:text-slate-300 transition '>Menu</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/reviews" className='hover:text-slate-300 transition'>Reviews</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/contact" className='hover:text-slate-300 transition'>Contact</Link>
      </li>
      <li className='sm:hidden'>
        <Link href="/" className='pl-8 font-normal text-slate-300 '>EN</Link>
      </li>
      <li className='sm:hidden'>
        <Link href="/tur" className='px-2 font-normal'>TUR</Link>
      </li>
     </ul>

    </nav>
  )
}

export default Navbar