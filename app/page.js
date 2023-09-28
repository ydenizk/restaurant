import Navbar from "./components/navbar/navbar";
import Logo from "./components/logo/logo";
import Reserv from "./components/reserv/reserv";
import Open from "./components/open/open";
import Slider from "./components/slider/slider"
import Footer from "./components/footer/footer";
import { BsFillHeartFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="p-0 m-0  w-full">
      <div
        className="flex justify-center items-center h-screen w-full   
          max-w-screen-xl m-0 "
      >
        <div className="flex-1 bg-bannercolor h-screen w-full ">
          <Logo />
        </div>
        <div className="flex-2 bg-banner w-screen h-screen  bg-cover">
          <Navbar />
        </div>
      </div>

      <div className="w-full max-w-screen-lg text-center mx-auto py-10">
        <h1 className="uppercase text-4xl font-extrabold tracking-wider my-6 ">YOUR BURGER-SNACKS POINT IN BERLIN</h1>
        <h3 className="uppercase text-2xl font-semibold tracking-wide mb-12">HOMEMADE MINI-BURGERS & street food <BsFillHeartFill className="text-red-400 text-3xl mx-auto my-2" /> </h3>
        <p className="font-light text-sm tracking-wide leading-6">Der kleine Flo ist Dein Tapasladen für Burger.</p>
        <p className="font-light text-sm max-w-3xl mx-auto tracking-wide mb-6 leading-6 ">
          Bei uns kannst Du endlich mehr als nur einen Burger essen, denn unsere
          Burger gibt es ausschließlich im Mini-Format. Ausgestattet mit Zettel
          und Stift kreierst Du Dein persönliches (Mini-Burger-) Menü. 2-3
          Mini-Burger entsprechen übrigens in etwa einem standardgroßen Burger;
          Du kannst aber natürlich auch gerne nur einen oder 4, 5, 6, 7, 8…
          bestellen.
        </p> 
        <p className="font-light text-sm tracking-wide">Feel free to combine it the way you like it…</p>
      </div>
      <Reserv />
 <Open />
 <Slider />
 <Footer />

    </main>
  );
}
