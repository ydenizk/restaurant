import React from "react";
import NavMnenu from "../components/NavMenu/navmenu";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Link from "next/link";

function Loginpage() {
  return (
    <main >
      <NavMnenu />
      <div className="flex justify-center items-center text-slate-200 py-16 bg-[#F0F0F0] border-y border-slate-300" >
        <div className="p-10 flex flex-col gap-8  bg-blackk my-16 ">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
         
              Contact us
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Loginpage;
