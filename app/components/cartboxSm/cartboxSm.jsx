
"use client"

import React from "react";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Link from "next/link";
import { useCartStore } from "./../../utils/store";
import { useEffect } from "react";

function CartboxSm() {

  const {totalItems} = useCartStore()
  ;
  //bu useeffect i hydration için yani sayfa yenılemede cart daj-kı sayılar aynı kalsın  
//istediğimiz için ,error verdiğiği için onu engellemek için yapuoruyz
useEffect(()=>{
  useCartStore.persist.rehydrate()
},[])

  return (
    <div className="    ">
      <div className="flex items-center  justify-center  mb-2 ">
        <PiShoppingCartSimpleThin className="text-[40px] text-blackk   " />
        <h1 className=" text-xl  text-blackk"> ({totalItems}) </h1>
      </div>

      <Link
        href="/cart"
        className="rounded-md uppercase  bg-blackk  w-1/2 p-2 text-center text-sm 
      mx-auto transition hover:bg-slate-700  text-slate-200 cursor-pointer "
      >
        Go to Cart
      </Link>
    </div>
  );
}

export default CartboxSm;
