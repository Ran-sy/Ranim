import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

function animalRace() {
  return (
    <div className="w-full">
      <div className="w-screen h-[25vh] lg:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#c5c6c7]/80 z-10" />
        <Image
          src="/Ranim/assets/projects/animal-race.jpg"
          alt="Animal Race"
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-6xl w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#1f2833] z-10 font-serif">
          <h2>Animal Race</h2>
          <h3>CSS / Animation</h3>
        </div>
      </div>

      <div className="mx-auto max-w-6xl p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#45a29e] font-bold tracking-widest uppercase">
            Animal Race
          </p>
          <h2 className=" indent-2 pb-3">Overview...</h2>
          <p>
            This app was built using CSS / Animation. I've made this during a
            course i took and it was a lot of fun to make it and watch it, i
            know i could have done other interesting patterns but i wanted
            something unique and joyfull
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://ran-sy.github.io/animals-race-animation/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/Ran-sy/animal-race-animation">Code</a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS3 ANIMATION
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer block">back</p>
        </Link>
      </div>
    </div>
  );
}

export default animalRace;
