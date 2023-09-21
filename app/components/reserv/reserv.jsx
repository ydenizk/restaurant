import React from "react";
import Image from "next/image";

import Link from "next/link";

function Reserv() {
  return (
    <div className="relative w-full h-[520px]  my-12 mb-20">

        <div className="flex-2 bg-reservv w-screen h-[520px] bg-cover">
      
        </div>
      <div className="absolute z-10 w-[540px] h-96  border-8 border-gray-700 bg-slate-100 top-[10%] right-[5%] p-8 ">
        <h1 className="uppercase text-3xl font-extrabold tracking-wide mb-4">
          Das perfekt kleine Geschenk - Flo Gutscheine
        </h1>
        <p className="font-light text-sm  mx-auto tracking-wide leading-6 mb-10">
          Ihr sucht ein schönes Geschenk für Eure Liebsten? Unsere Gutscheine
          könnt Ihr hier über unsere Partnerseite direkt downloaden. Oder
          möchtet Ihr lieber klassisch einen Papiergutschein verschenken? Kein
          Problem, diesen könnt Ihr jederzeit vor Ort bei uns im Laden
          ausstellen lassen.
        </p>
        <Link
          href="/menu"
          className="p-3 border-2 border-slate-900 transition hover:bg-slate-200  "
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default Reserv;
