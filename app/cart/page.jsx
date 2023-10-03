import React from "react";
import NavMnenu from "../components/NavMenu/navmenu";
import { single } from "../main-data";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer/footer";
function CartPage() {
  return (
    <div className="bg-blackk">
      <NavMnenu />

      <div className="w-full flex justify-center items-center my-8 px-4 py-16 text-slate-300
       border-y border-slate-300 ">
        <div className=" w-[1024px] my-12 h-auto  flex items-center justify-center mmd:flex-col ">
          <div className="flex-2 w-full flex flex-col ">
            <div className="w-full flex justify-evenly items-center mb-4">
              <Image
                src={single.img}
                width={150}
                height={150}
                alt=""
                className="object-contain rounded-md border border-slate-500"
              />
              <div>
                <h1 className="text-lg font-semibold"> {single.title} </h1>
                <h4 className="font-extralight"> Large</h4>
              </div>
              <h1 className="text-lg font-semibold">16.40 E </h1>
              <button className="text-lg font-semibold">X</button>
            </div>
            <div className="w-full flex justify-evenly items-center mb-4">
              <Image
                src={single.img}
                width={150}
                height={150}
                alt=""
                className="object-contain rounded-md border border-slate-500"
              />
              <div>
                <h1 className="text-lg font-semibold"> {single.title} </h1>
                <h4 className="font-extralight"> Large</h4>
              </div>
              <h1 className="text-lg font-semibold">16.40 € </h1>
              <button className="text-lg font-semibold">X</button>
            </div>
            <div className="w-full flex justify-evenly items-center mb-4">
              <Image
                src={single.img}
                width={150}
                height={150}
                alt=""
                className="object-contain rounded-md border border-slate-500"
              />
              <div>
                <h1 className="text-lg font-semibold"> {single.title} </h1>
                <h4 className="font-extralight"> Large</h4>
              </div>
              <h1 className="text-lg font-semibold">16.40 € </h1>
              <button className="text-lg font-semibold">X</button>
            </div>
          </div>
          <div
            className="flex-1 w-full  h-full border-l border-text-slate-400 
          flex flex-col   justify-center p-6
"
          >
            <div className="flex    w-full justify-between">
              <p className="tracking-wide font-extralight text-lg">
                Subtotal (3 items)
              </p>
              <h1 className="tracking-wide text-lg"> 32.80 €</h1>
            </div>
            <div className="flex   w-full justify-between">
              <p className="tracking-wide text-lg  font-extralight">Delivery</p>
              <h1 className="tracking-wide text-lg"> 0.00 €</h1>
            </div>
            <div className="flex justify-between   w-full mt-4 py-3 border-t border-slate-500">
              <p className="tracking-wide text-lg">TOTAL(inc. VAT)</p>
              <h1 className="tracking-wide text-lg"> 32.80 €</h1>
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

      <Footer />
    </div>
  );
}

export default CartPage;
