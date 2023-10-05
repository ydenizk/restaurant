import React from "react";

import Image from "next/image";
import Link from "next/link";
import Cartbox from "@/app/components/cartbox/cartbox";


const getData = async (category) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("category data fetch failed...");
  }
  return res.json();
};

async function CategoryPage({ params }) {
  const products = await getData(params.category);

  return (
    <div className="w-full flex ">
      <div className="flex-2   gap-4 my-8 ">
        <h2
          className="bg-blackk w-48 p-3 ml-4 rounded-md my-8   capitalize font-bold text-xl
                text-center text-slate-200 tracking-wider whitespace-nowrap"
        >
          {params.category}
        </h2>
        <div
          className="    gap-4  grid grid-cols-2 text-slate-300 p-4 my-8 
       font-extralight mmd:grid-cols-1"
        >
          {products.map((product) => {
            return (
              <div key={product.id} className="bg-blackk rounded-lg">
                <Image
                  src={product.img}
                  width={540}
                  height={308}
                  alt=""
                  loading="lazy"
                  className="object-cover rounded-md"
                />
                <div className="flex  items-center p-4 mt-2">
                  <div className="font-extralight flex-2">
                    <h3 className="  tracking-wide mb-1"> {product.title} </h3>
                    <p className="font-extralight text-xs text-slate-400">
                      {product.desc}
                    </p>
                  </div>

                  <div className="flex flex-1 w-full  justify-end items-center ">
                    <h3 className="xs:text-sm"> {product.price} € </h3>
                    <Link
                      //href={`/menu/${id}`}
                      href=""
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
        <div className="w-full text-center">
        <Link href="/menu" className="bg-blackk w-48 p-3 ml-4 rounded-md my-8  transition hover:bg-slate-700  capitalize font-bold text-xl
                text-center mx-auto text-slate-200 tracking-wider whitespace-nowrap">
                    back to menu
                </Link>
                </div>
      </div>

      <Cartbox />
    </div>
  );
}

export default CategoryPage;
