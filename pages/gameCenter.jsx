import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

function gameCenter() {
  return (
    <div className="w-full">
      <div className="w-screen h-[25vh] lg:h-[30vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#c5c6c7]/80 z-10" />
        <Image
          src="/../public/assets/projects/game-center.jpg"
          alt="Game Center"
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-6xl w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#1f2833] z-10 font-serif">
          <h2>Game Center</h2>
          <h3>Javascript</h3>
        </div>
      </div>

      <div className="mx-auto max-w-6xl p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#45a29e] font-bold tracking-widest uppercase">
            Game Center
          </p>
          <h2 className=" indent-2 pb-3">Overview...</h2>
          <p>
            This app was built using Javascript. Number of games that you can
            try to play them now, they are simple games, like: memory, and they
            were fun to make and test
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="https://ran-sy.github.io/game-center/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/Ran-sy/game-center">Code</a>
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
                <RiRadioButtonFill className="pr-1" /> TailwindCss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
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

export default gameCenter;
