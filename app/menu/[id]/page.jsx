import React from "react";
import Image from "next/image";
import { food } from "@/app/main-data.js";
import { notFound } from "next/navigation";
import Price from "@/app/components/price/price";
import Link from "next/link";

export const generateStaticParams = async () => {
  const paths = food.flatMap((category) =>
    category.details.map((item) => ({
      id: item.id.toString(),
    }))
  );

  return paths;
};

export default function TitleId({ params }) {
  const id = params.id;
  const selectedItem = food
    .flatMap((category) => category.details)
    .find((item) => item.id.toString() === id);
  if (!selectedItem) {
    notFound();
  }

  return (
    <div className=" bg-[#F0F0F0] pb-24 ">
      <div className="max-w-screen-lg px-[10%] pt-12 mmd:text-center">
        <Link
          href="/menu"
          className="     text-xl font-semibold bg-blackk hover:bg-slate-800 text-slate-200
        p-4 transition duration-300  uppercase tracking-wide "
        >
          Back to menu
        </Link>
      </div>

      <div className="w-full  px-[10%] mt-12  max-w-screen-lg flex  justify-center items-center gap-[3%] mmd:flex-col mmd:gap-0">
        <div className="flex-2 w-full h-full border-2 border-blackk p-10 max-w-[540px] bg-blackk ">
          <Image
            src={selectedItem.img}
            width={540}
            height={309}
            alt=""
        
            loading="lazy"
            className="object-contain rounded-md mmd:mx-auto  "
          />
        </div>

        <div
          className="flex-1 h-auto p-6  mx-auto      bg-blackk rounded-md  mmd:rounded-none 
          text-slate-300 mmd:max-w-[540px] "
        >
          <h1 className="tracking-wide  font-semibold py-2 text-2xl">
            {selectedItem.title}
          </h1>
          <p className="font-extralight mb-3">{selectedItem.desc}</p>
          <Price
            options={selectedItem.options}
            id={selectedItem.id}
            price={selectedItem.price}
          />

          <p className="text-slate-300 font-extralight text-xs  ">
            * You can order max.5 due to logistics issues
          </p>
        </div>
      </div>
    </div>
  );
}
