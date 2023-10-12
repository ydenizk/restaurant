
"use client"
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function NavInOut() {
  const { status } = useSession();

  return (
    <div className="w-full flex flex-col items-center  ">
      {status === "authenticated" ? (
        <div className="flex flex-col justify-center items-center mb-6">
        <Link
          href="/orders"
          className=" py-2 border-2 border-slate-200 text-slate-100 text-center w-36 mx-auto 
         hover: hover:bg-orange-900  transition "
        >
          My Orders
        </Link>
     
        <button className=" text-orange-100 mx-auto text-center mt-1 text-sm "
        onClick={()=>signOut()}
        >
          Log Out
        </button>
      </div>
  
      ) : (
        <Link
        href="/login"
        className=" py-2 border-2 border-slate-200 text-slate-100 text-center w-36 mx-auto 
         hover: hover:bg-orange-900  transition mb-12 "
      >
        Login
      </Link>
      )}
    </div>
  );
}

export default NavInOut;
