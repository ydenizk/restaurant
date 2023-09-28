

import React from "react";
import Image from "next/image";
import { food } from "@/app/main-data.js";
import {notFound} from "next/navigation";
import Price from "@/app/components/price/price";


export const generateStaticParams = async () => {
  const paths = food.flatMap((category) =>
    category.details.map((item) => ({
       id: item.id.toString() ,
    }))
  );

  return paths;
};






export default function TitleId({params}) {

  const id = params.id;
  const selectedItem = food
    .flatMap((category) => category.details)
    .find((item) => item.id.toString() === id);
    if (!selectedItem) {
      notFound()
    }
  



  return (
    <div className="w-full px-[10%] my-16  max-w-screen-lg flex justify-center items-center gap-8">
      <div className="flex-2 w-full">
        <Image
          src={selectedItem.img}
          width={640}
          height={365}
          alt=""
          className="object-cover rounded-md"
        />
      </div>

      <div
        className="flex-1 h-auto p-6 px-8  mx-auto   w-full border-2  bg-blackk rounded-md
     text-slate-300"
      >
        <h1 className="tracking-wide  font-semibold py-2 text-2xl">
          {selectedItem .title}
        </h1>
        <p className="font-extralight mb-3">{selectedItem .desc}</p>
          <Price options={selectedItem.options} id={selectedItem.id} price={selectedItem.price} /> 

        <p className="text-slate-300 font-extralight text-xs  ">
          * You can order max.5 due to logistics issues
        </p>
      </div>
    </div>
  );
}



