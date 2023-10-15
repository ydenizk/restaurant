"use client";

//zustand olduğu için doğal olarak client side

import React from "react";
import NavMnenu from "../components/NavMenu/navmenu";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer/footer";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { useCartStore } from "./../utils/store";
import { useEffect } from "react";

function CartPage() {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  //bu useeffect i hydration için yani sayfa yenılemede cart daj-kı sayılar aynı kalsın
  //istediğimiz için ,error verdiğiği için onu engellemek için yapuoruyz
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="bg-blackk">
      <NavMnenu />

      <div
        className="w-full flex justify-center items-center mt-8 px-4 py-12 pb-8 text-slate-300
           border-t border-slate-300 "
      >
        <div className=" w-[1024px] mt-8 h-auto  flex items-center justify-center mmd:flex-col ">
          <div className="flex-2 w-full flex flex-col ">
            {/* single item */}

            {products.map((product) => {
              return (
                <div
                  className="w-full flex justify-evenly items-center mb-4"
                  key={product.id}
                >
                  <Image
                    src={product.img}
                    width={150}
                    height={150}
                    alt=""
                    className="object-contain rounded-md border border-slate-500"
                  />
                  <div>
                    <h1 className="text-lg font-semibold sm:text-base">
                      {" "}
                      {product.title} x {product.quantity}{" "}
                    </h1>
                    <h4 className="font-extralight sm:text-sm">{product.optionTitle} </h4>
                  </div>
                  <h1 className="text-lg font-semibold">{product.price} € </h1>
                  <button
                    className="text-lg font-semibold"
                    onClick={() => removeFromCart(product)}
                  >
                    X
                  </button>
                </div>
              );
            })}

            {/* .......single item END */}
          </div>
          <div
            className="flex-1 w-full  h-full border-l border-text-slate-400 
              flex flex-col   justify-center items-center p-6 mmd:border-x "
          >
            
            <div className="flex items-center mt-4 justify-center mb-8 ">
              <PiShoppingCartSimpleThin className="text-[60px] text-slate-200  sm:text-[40px] " />
              <h1 className=" text-3xl sm:text-xl text-slate-200">
                {" "}
                ({totalItems}){" "}
              </h1>
            </div>
            <div className="flex    w-full justify-between">
              <p className="tracking-wide font-extralight text-lg">
                Subtotal ({totalItems} items)
              </p>
              <h1 className="tracking-wide text-lg"> {totalPrice} €</h1>
            </div>
            <div className="flex   w-full justify-between">
              <p className="tracking-wide text-lg  font-extralight">Delivery</p>
              <h1 className="tracking-wide text-lg"> 0.00 €</h1>
            </div>
            <div className="flex justify-between   w-full mt-4 py-3 border-t border-slate-500">
              <p className="tracking-wide text-lg">TOTAL(inc. VAT)</p>
              <h1 className="tracking-wide text-lg"> {totalPrice} €</h1>
            </div>

            <Link
              href="/"
              className="uppercase border border-slate-300 w-1/2 p-3 text-center 
             mx-auto  mt-12 transition hover:bg-slate-700 duration-200 cursor-pointer"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg px-[10%] flex justify-between items-center  mmd:text-center border-b ">
            <Link
              href="/menu"
              className="     text-xl font-semibold bg-slate-200 hover:bg-slate-300 text-blackk
              p-2  transition duration-300  uppercase tracking-wide  mb-8 mx-auto rounded"
            >
              Back to menu
            </Link>
          </div>
      <Footer />
    </div>
  );
}

export default CartPage;
