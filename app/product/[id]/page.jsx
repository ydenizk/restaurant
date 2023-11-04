import React from "react";
import Image from "next/image";
import CartboxSm from "./../../components/cartboxSm/cartboxSm";
import Price from "@/app/components/price/price";
import Link from "next/link";

const getData = async (id) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

export default async function TitleId({ params }) {
  const singleProduct = await getData(params.id);

  return (
    <div className=" bg-[#F0F0F0]  ">
      <div className="max-w-screen-lg px-[10%] flex justify-between items-center pt-12 mmd:text-center ">
        <Link
          href="/menu"
          className="     text-xl font-semibold bg-blackk hover:bg-slate-800 text-slate-200
        p-4 transition duration-300  uppercase tracking-wide "
        >
          Back to menu
        </Link>
        <CartboxSm />
      </div>

      <div className="w-full  px-[10%] my-12  max-w-screen-lg flex  justify-center items-center gap-[3%] mmd:flex-col mmd:gap-0">
        <div className="flex-1 w-full h-full border-2 border-blackk p-10 max-w-[540px] bg-blackk  ">
          <Image
            src={singleProduct.img}
            width={540}
            height={309}
            alt=""
            loading="lazy"
            className="object-contain rounded-md mmd:mx-auto  "
          />
        </div>

        <div
          className="flex-1 h-auto p-6  mx-auto   bg-blackk rounded-md  mmd:rounded-none 
          text-slate-300 mmd:w-full mmd:max-w-[540px]"
        >
          <h1 className="tracking-wide  font-semibold py-2 text-2xl">
            {singleProduct.title}
          </h1>
          <p className="font-extralight mb-3">{singleProduct.desc}</p>
          <Price product={singleProduct} />

          <p className="text-slate-300 font-extralight text-xs  ">
            * You can order max.5 due to logistics issues
          </p>
        </div>
      </div>
    </div>
  );
}
