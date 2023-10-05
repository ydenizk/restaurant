import React from 'react'
import { MdLocalPhone } from "react-icons/md";

function AdressPage() {
  return (
    <div className="bg-blackk w-full h-16  border-t border-b border-slate-200">
    <div className="flex mb-4 items-center h-full px-[3%] text-slate-200 mmd:justify-center">
      <MdLocalPhone className="text-3xl mr-4  sm:xl xs:text-lg " />
      <p className="font-light tracking-wide mr-4 sm:text-sm xs:text-xs">216 / 354 76 81</p>
      <p className="font-light tracking-wide sm:text-sm xs:text-xs">
        Josephspitalstraße 4 80331 München
      </p>
    </div>
  </div>
  )
}

export default AdressPage