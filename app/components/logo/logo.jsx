import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

function Logo() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between items-center  mmd:p-2  mmd:justify-center  ">
      <Image
        src="/log.png"
        width={200}
        height={200}
        alt="logo"
        className="rounded-full opacity-90 mx-auto my-4 mmd:mx-0  "
      />
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
      <div className=" w-full flex flex-col items-center  my-8 mmd:my-4 mmd:flex-row  mmd:justify-evenly ">
        <Link
          href="/menu"
          className=" whitespace-nowrap py-3 border-2 border-slate-200 text-slate-100 text-center w-36 
          mx-auto mb-4 hover:bg-orange-900 transition mmd:w-32 mmd:p-2  mmd:m-0 "
        >
          Order Online
        </Link>
        <Link
          href="/login"
          className=" py-3 border-2 border-slate-200 text-slate-100 text-center w-36 mx-auto 
           hover: hover:bg-orange-900  transition  mmd:w-32 mmd:p-2 mmd:m-0 "
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Logo;
