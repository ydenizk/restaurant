import React from "react";
import { MdLocationOn, MdLocalPhone, MdBorderColor } from "react-icons/md";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-screen h-80  text-stone-200 p-0">
      <div className="h-64  bg-blackk grid grid-cols-3 gap-x-8 px-16 items-center justify-center">
        <div>
          <h1 className="uppercase text-xl font-bold tracking-wide mb-3 text-slate-100">CONTACT US</h1>
          <div className="mb-2 text-stone-300">
            <div className="flex mb-2 items-center">
              <MdLocationOn className="text-xl mr-2  " />

              <p className="font-light ">Josephspitalstraße 4 80331 München</p>
            </div>

            <div className="flex mb-2 items-center">
              <MdLocalPhone className="text-xl mr-2 " />
              <p className="font-light ">216 / 354 76 81</p>
            </div>

            <div className="flex mb-2 items-center">
              <PiEnvelopeSimpleBold className="text-xl mr-2" />
              <p className="font-light ">hello@rtheechoeskitchen.com</p>
            </div>
          </div>
        </div>
        <div >
        <h1 className="uppercase text-xl font-bold tracking-wide mb-3 text-slate-100">CHECK OUT </h1>

        <ul className="list-disc pl-5  ">
          <li className="px-2 tracking-wide  ">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 tracking-wide">
            <Link href="/about" className="whitespace-nowrap">
              About us
            </Link>
          </li>
          <li className="px-2 tracking-wide">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="px-2 tracking-wide">
            <Link href="/reviews">Reviews</Link>
          </li>
          <li className="px-2 tracking-wide">
            <Link href="/contact">Contact</Link>
          </li>
       
        </ul>



      </div>
      
      </div>
      <div className="h-16 bg-black px-16 ">
             <h1 className="text-xs pt-6  text-stone-400 tracking-wide ">&copy;All rights reserved by YdenizK 2023.</h1>
      </div>
    </div>
  );
}

export default Footer;
