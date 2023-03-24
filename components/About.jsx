import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex item-center py-16">
      <div className="max-w-6xl m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <b className="uppercase text-xl tracking-widest text-[#45a29e]">
            About
          </b>
          <h2 className="py-4 indent-2">Who I Am...</h2>
          <p className="py-2 text-gray-600">// I am an energetic developer</p>
          <p className="py-2 text-gray-600">
            My name is Ranim. I make responsive websites and flutter
            applications. I am Syrian who is currently based in Cairo-Egypt
          </p>
          <p className="py-2 text-gray-600">
            I am a dependable developer and always energetic and eager to learn
            new technologies
          </p>
          <Link
            href="/#projects"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Check out some of my latest projects
          </Link>
        </div>
        <div className="flex items-center rounded-xl">
          <Image
            src="/../public/assets/laptop.jpg"
            alt="/"
            width={800}
            height={250}
            className="shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-300 "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
