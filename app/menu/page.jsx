import React from "react";
import SubMenu from "../components/submenu/submenu";
import { MdLocalPhone } from "react-icons/md";


function MenuPage() {
  return (
    <div className="p-0  w-full ">
      <div className="bg-blackk w-full h-16  border-t border-b border-slate-200">
        <div className="flex mb-4 items-center h-full px-[3%] text-slate-200">
          <MdLocalPhone className="text-3xl mr-4  " />
          <p className="font-light tracking-wide mr-4">216 / 354 76 81</p>
          <p className="font-light tracking-wide">
            Josephspitalstraße 4 80331 München
          </p>
        </div>
      </div>
      <SubMenu />
     
    </div>
  );
}

export default MenuPage;
