import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

function Logo() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between min-w-[275px]  ">
      <Image
        src="/log.png"
        width={200}
        height={200}
        alt="logo"
        className="rounded-full opacity-90 mx-auto my-4 "
      />
      <div className="w-full flex justify-center itemms-around  ">
        <Link href="https://twitter.com/home" className="ml-2 px-2 ">
          <ImTwitter className="text-slate-100 transition hover:bg-slate-300 text-2xl " />
        </Link>
        <Link href="https://www.facebook.com" className="ml-2 px-2">
          <ImFacebook className="text-slate-100 transition hover:bg-slate-300  text-2xl " />
        </Link>
        <Link href="https://instagram.com/" className="ml-2 px-2">
          <FaInstagramSquare className="text-slate-100 transition hover:bg-slate-300  text-2xl " />
        </Link>
      </div>
      <div className="flex flex-col my-8">
        <Link
          href="/menu"
          className=" whitespace-nowrap p-3 border-2 border-slate-200 text-slate-100 text-center w-3/4 mx-auto mb-4 hover:bg-red-900 transition "
        >
          Order Online
        </Link>
        <Link
          href="/login"
          className=" p-3 border-2 border-slate-200 text-slate-100 text-center w-3/4 mx-auto  hover:bg-red-900 transition "
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Logo;
