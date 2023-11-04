import React from "react";
import Link from "next/link";
import Cartbox from "../components/cartbox/cartbox";

const getData = async () => {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/category`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("category data fetch failed...");
  }
  return res.json();
};

async function MenuPage() {
  const catData = await getData();

  return (
    <div className="w-full  flex   ">
      <div
        className=" w-full flex-2 p-10 
       m-4 my-16 rounded-md bg-resbanner
        object-contain"
      >
        <div className=" w-full  flex flex-col items-left   gap-6 pl-8">
          {catData.map((cat) => {
            return (
              <Link
                href={`/menu/${cat.tit}`}
                key={cat.id}
                className=" text-slate-300 w-[50%]  transition hover:bg-slate-700 tracking-wider 
                   uppercase bg-blackk text-xl py-5 rounded-md text-left px-12 "
              >
                {cat.tit}
              </Link>
            );
          })}
        </div>
      </div>
      <Cartbox />
    </div>
  );
}

export default MenuPage;
