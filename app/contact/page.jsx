import React from "react";

function ContactPage() {
  return (
    <div className=" flex justify-center items-center">
      <div>
        <div className="  pt-16   mx-auto text-center max-w-2xl">
          <h1 className="uppercase text-4xl font-extrabold tracking-wider mb-6  ">
            CONTACT US
          </h1>

          <p className="font-extralight text-sm max-w-3xl mx-auto tracking-wide leading-6">
            The Echoes Kitchen opened in March 2019 as a Mediterranean club
            restaurant in Prenzlauer Berg, Berlin and later moved to Mitte. It
            is relatively small and comfortable, can host up to 40 guests during
            winter and almost double of that during summer due to the huge
            terrace. The price range is from medium to high. The concept of the
            restaurant is “Burgers”.
          </p>
        </div>

        <form
          className="flex flex-col gap-4 justify-center items-center 
          w-full max-w-[640px] mx-auto   rounded   my-16 "
        >
          <div className=" w-[640px]">
            <input
              className="w-[640px] h-10 border text-blackk font-extralight border-slate-600 text-lg rounded outline-0 px-2  "
              type="text"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div>
            <input
              required
              placeholder="Email"
              id="email"
              type="text"
              className="w-[640px] h-10 text-lg border  text-blackk font-extralight border-slate-600  rounded  outline-0 px-2 "
            />
          </div>
          <div>
            <textarea
              required
              placeholder="Message"
              id="message"
              cols="63"
              rows="6"
              className="rounded  border  text-blackk font-extralight border-slate-600   border-slate-600outline-0 px-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="   border  border-blackk transition  hover:bg-slate-200 mb-4 uppercase py-1 px-8 tracking-wide text-xl cursor-pointer  "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
