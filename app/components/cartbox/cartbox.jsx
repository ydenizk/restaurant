import React from 'react'
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Link from 'next/link';

function cartbox() {
  return (
    <div className="  flex-1  bg-blackk text-center h-auto max-w-xs  ">
        <div className="flex items-center mt-[30%] justify-center mb-[20%] xs:mb-[40%] xs:mt-[40%] ">
          <PiShoppingCartSimpleThin className="text-[60px] text-slate-200  sm:text-[40px] " />
          <h1 className=" text-3xl sm:text-xl text-slate-200"> (1) </h1>
        </div>

        <Link
          href="/cart"
          className="rounded-md uppercase  bg-slate-200  w-1/2 p-3 text-center 
mx-auto transition hover:bg-slate-400  text-blackk cursor-pointer sm:p-2 sm:text-sm  xs:text-xs"
        >
          Go to Cart
        </Link>
      </div>
  )
}

export default cartbox