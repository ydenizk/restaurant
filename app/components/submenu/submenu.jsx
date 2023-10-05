import React from "react";
//import { food } from "@/app/main-data";
import Image from "next/image";

import Link from "next/link";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/category", {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error("category data fetch failed...");
  }
  return res.json();
};

async function SubMenu() {
  const catData =await getData();

  return (
    <div className="relative w-screen">
      {/* MENU ADLARI */}
      <div className=" w-full h-12 flex bg-blackk ">
        <div className="bg-blackk h-full w-[60%]  flex items-center  justify-between px-8 mmd:w-[80%] sm:w-[100%]">
          {catData.map((cat) => {
            return (
              <div key={cat.id}>
                <button
           
                  className="border-0 text-slate-200 transition hover:text-slate-400 tracking-wide 
                   capitalize font-light xs:text-sm  xs:font-semibold "
                >
                  {cat.tit}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* --------- */}

      {/* 2 ye bir kasa ve menu kartalrı bölmelı kısım*/}
      <div className=" bg-blackk h-auto m-0 w-full  flex  text-slate-300 absolute left-0 top-12 scroll-smooth ">
        <div className=" border-r border-white w-full flex-3 ">
          {food.map((ff) => {
            const { id, tit, details } = ff;
            return (
              <div className="px-8 py-4  bg-white" key={id}>
                <h2
                  className="bg-blackk w-48 p-2 mb-12  capitalize font-bold text-xl
                text-center text-slate-200 tracking-wider whitespace-nowrap"
                >
                  {tit}
                </h2>
                <div className="gap-x-6 gap-y-4  grid grid-cols-2 text-slate-300  font-extralight mmd:grid-cols-1">
                  {details.map((dt) => {
                    const { id, title, desc, img, price, options } = dt;
                    return (
                      <div key={id} className="bg-blackk rounded-lg">
                        <Image
                          src={img}
                          width={540}
                          height={308}
                          alt=""
                          loading="lazy"
                          className="object-cover rounded-md"
                        />
                        <div className="flex  items-center p-4 mt-2">
                          <div className="font-extralight flex-2">
                            <h3 className="  tracking-wide mb-1"> {title} </h3>
                            <p
                              className="font-extralight text-xs text-slate-400
"
                            >
                              {desc}
                            </p>
                          </div>

                          <div className="flex flex-1 w-full  justify-end items-center ">
                            <h3 className="xs:text-sm"> {price} € </h3>
                            <Link
                              href={`/menu/${id}`}
                              className="ml-4 w-4 h-4 text-blackk bg-slate-400 transition hover:bg-slate-300 opacity-80 text-center leading-4 rounded-sm"
                            >
                              +
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="  flex-1  bg-blackk text-center h-screen sticky right-0 top-0 sm:border-t ">
          <div className="flex items-center mt-[30%] justify-center mb-[20%] xs:mb-[40%] xs:mt-[40%] ">
            <PiShoppingCartSimpleThin className="text-[60px]  sm:text-[40px] " />
            <h1 className=" text-3xl sm:text-xl"> (1) </h1>
          </div>

          <Link
            href="/cart"
            className="uppercase border border-slate-300 w-1/2 p-3 text-center 
          mx-auto transition hover:bg-slate-700 duration-200 cursor-pointer sm:p-2 sm:text-sm  xs:text-xs"
          >
            Go to Cart
          </Link>
        </div>
      </div>
      {/* 2 ye bir kasa ve menu kartalrı bölmelı kısım -SONNNNNN*/}
    </div>
  );
}

export default SubMenu;
