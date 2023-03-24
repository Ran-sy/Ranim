import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" max-w-6xl w-full h-full mx-auto p-2 flex justify-center items-center pt-20">
        <div className=" text-gray-700">
          <p className="uppercase text-sm tracking-wider text-gray-600">
            Welcome to my website
          </p>
          <h1>
            Hi, I'm <span className="text-[#45a29e]">Ranim</span>{" "}
            <span>
              <MdWavingHand size={25} className="inline" />
            </span>
          </h1>
          <h1 className="py-2">Flutter & Frontend web developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a flutter & frontend web developer specializing in building
            exceptional mobile and web applications that provide the best
            digital experiences. Currently, I'm focused on building responsive
            frontend web applications while learning some backend technologies
          </p>
          <div className="flex justify-between items-center max-w-sm m-auto py-4">
            <div className="rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
              <a
                href="https://www.linkedin.com/in/ranim-t-a36483182/"
                target="_blank"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
            <div className="rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
              <a href="https://github.com/Ran-sy" target="_blank">
                <FaGithub size={20} />
              </a>
            </div>
            <div className="rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
              <a href="mailto:ranim.1999.ta@gmail.com" target="_blank">
                <AiOutlineMail size={20} />
              </a>
            </div>
            <div className="rounded-md shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-300">
              <a href="tel:+201147675444" target="_blank">
                <BsPersonLinesFill size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
