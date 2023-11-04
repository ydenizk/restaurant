import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import NavInOut from "../navInOut/navInOut";

function Logo() {






  return (
    <div className="w-full h-full p-4 flex flex-col justify-between items-center  mmd:p-2  mmd:justify-center  ">
      <Link href="/">
         <Image
        src="/log.png"
        width={200}
        height={200}
        alt="logo"
        className="rounded-full opacity-90 mx-auto my-4 mmd:mx-0  "
      />
      </Link>
   
      <div className="w-full flex justify-center itemms-around mmd:hidden ">
        <Link href="https://twitter.com/home" className="ml-2 px-2 ">
          <ImTwitter className="text-slate-100 transition hover:text-slate-300 text-2xl " />
        </Link>
        <Link href="https://www.facebook.com" className="ml-2 px-2">
          <ImFacebook className="text-slate-100 transition hover:text-slate-300  text-2xl " />
        </Link>
        <Link href="https://instagram.com/" className="ml-2 px-2">
          <FaInstagramSquare className="text-slate-100 transition hover:text-slate-300  text-2xl " />
        </Link>
      </div>
   
    
    <NavInOut />
   
    </div>
  );
}

export default Logo;
