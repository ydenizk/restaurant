import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='w-full'>

     <ul className='w-full flex justify-center items-center h-32 bg-stone-800 opacity-70  text-slate-100 pl-10 font-bold'>
      <li className='px-2 tracking-wide'>
        <Link href="/">Home</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/about" className='whitespace-nowrap'>About us</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/menu">Menu</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/reviews">Reviews</Link>
      </li>
      <li className='px-2 tracking-wide'>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/" className='pl-8 font-normal text-slate-200 '>EN</Link>
      </li>
      <li>
        <Link href="/tur" className='px-2 font-normal'>TUR</Link>
      </li>
     </ul>

    </nav>
  )
}

export default Navbar