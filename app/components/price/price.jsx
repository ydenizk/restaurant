"use client";

import React, { useEffect, useState } from "react";

function Price({ options, price, id }) {
  const [total, setTotal] = useState(price);
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      qty * (options ? price + options[selected].additionalPrice : price)
    );
  }, [qty, selected, options, price]);

  return (
    <div className="mb-1">
      <h1 className="tracking-wide  font-semibold py-2 text-2xl">
        ${total.toFixed(2)} €
      </h1>

      <div className="w-full flex items-center justify-start my-2 mb-6">
        {options.map((opt, index) => {
          return (
            <button
              key={opt.title}
              className="w-28 p-2 tracking-wide text-xl  mr-4 border border-slate-200 "
              style={{
                background:
                  selected === index ? "rgb(226 232 240)" : "rgb(26,26,33)",
                color:
                  selected === index ? "rgb(26,26,33)" : "rgb(226 232 240)",
              }}
              onClick={() => setSelected(index)}
            >
              {opt.title}
            </button>
          );
        })}
      </div>

      {/* Chart part.. */}
     

   
      <div className="flex w-full  mb-4">
        {/* ......... */}
        <button
          className=" text-xl font-semibold border border-text-slate-200 
        border-r-0 px-2  transition hover:bg-slate-200 hover:text-blackk duration-300"
          onClick={() => setQty((n) => (n > 1 ? n - 1 : 1))}
        >
          -
        </button>
        <h2 className="text-xl font-semibold border border-text-slate-200   px-5">
          {qty}
        </h2>
        <button
          className=" text-xl font-semibold border 
        border-l-0  px-2 transition hover:bg-slate-200 hover:text-blackk duration-300 "
          onClick={() => setQty((n) => (n < 5 ? n + 1 : 5))}
        >
          +
        </button>
        <button className=" text-center   px-3 tracking-wide text-lg  cursor-pointer text-blackk   border border-slate-200 bg-slate-400 hover:bg-slate-500 transiti ">ADD</button>
        </div>
        
      



    
    </div>
  );
}

export default Price;
