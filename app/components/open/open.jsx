import { MdLocationOn, MdLocalPhone, MdBorderColor } from "react-icons/md";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Open() {
  return (
    <div className="w-full max-w-screen-lg grid grid-cols-2  justify-center items-center gap-10 max-w-screen-lg p-4 mb-20  ">
      <div className=" border-8 border-gray-800 p-8">
        <h1 className="uppercase text-3xl font-bold mb-8">
          The echoes kitchen
        </h1>
        <div className="mb-6">
          <div className="flex mb-4 items-center">
            <MdLocationOn className="text-3xl mr-4" />
            <p className="font-light tracking-wide">
              Josephspitalstraße 4 80331 München
            </p>
          </div>

          <div className="flex mb-4 items-center">
            <MdLocalPhone className="text-3xl mr-4 " />
            <p className="font-light tracking-wide">216 / 354 76 81</p>
          </div>

          <div className="flex mb-4 items-center">
            <PiEnvelopeSimpleBold className="text-3xl mr-4" />
            <p className="font-light tracking-wide">
              hello@rtheechoeskitchen.com
            </p>
          </div>
          <div className="flex mb-4 items-center">
            <MdBorderColor className="text-3xl mr-4" />
            <p className="font-light tracking-wide">
              order@rtheechoeskitchen.com
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center mb-8">
          <Link href="https://instagram.com/" className="ml-2 px-2">
            <FaInstagramSquare className=" text-3xl " />
          </Link>
          <Link
            href="/menu"
            className="p-3 border-2 px-5 border-slate-900 transition hover:bg-slate-200 text-slate-900 text-center  "
          >
            Order Now
          </Link>
        </div>
        <h1 className="font-light">We are looking forward to you!</h1>
      </div>

      <div className="border-8 border-gray-800 p-8">
        <h1 className="w-full mx-auto text-3xl  text-center uppercase font-bold mb-8">
          Open hours
        </h1>
        <div className="flex  justify-between text-center mb-4 w-full">
          <h3 className="font-light text-left">Monday</h3>
          <p className="font-light">11:30 am – 22:00 pm</p>
        </div>
        <div className="flex  justify-between text-center  mb-4 w-full">
          <h3 className="font-light text-left">Tuesday</h3>
          <p className="font-light">11:30 am – 22:00 pm</p>
        </div>
        <div className="flex  justify-between text-center  mb-4 w-full">
          <h3 className="font-light text-left">Wednesday</h3>
          <p className="font-light">11:30 am – 22:00 pm</p>
        </div>
        <div className="flex  justify-between text-center  mb-4 w-full ">
          <h3 className="font-light text-left">Thursday</h3>
          <p className="font-light">11:30 am – 22:00 pm</p>
        </div>
        <div className="flex  justify-between text-center  mb-4 w-full">
          <h3 className="font-light">Friday</h3>
          <p className="font-light">12:30 am – 22:00 pm</p>
        </div>
        <div className="flex  justify-between text-center  mb-4 w-full">
          <h3 className="font-light text-left">Saturday</h3>
          <p className="font-light">11:30 am – 22:00 pm</p>
        </div>
        <div className="flex    mb-3 w-full">
          <h3 className="font-light text-left -pl-4">Sonntag</h3>
          <p className="font-light w-full text-right  ">Closed</p>
        </div>
        <h1 className="font-light w-full text-center">  ** Kitchen closes at 21:00 </h1>
      </div>
      

 
    </div>
  );
}

export default Open;
