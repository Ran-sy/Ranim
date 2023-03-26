import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  function handleNav() {
    setNav((prev) => !prev);
  }

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-[90vw] h-20 shadow-xl z-[100]"
          : "fixed w-[90vw] h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-[90vw] h-full px-2 2xl:px-16 md:justify-around">
        <Link href="/#">
          <Image
            src="/Ranim/assets/RYLogo.png"
            alt="/"
            width={75}
            height={75}
          />
        </Link>
        <ul className="hidden md:flex justify-between">
          <Link href="/#home">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/#about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/#skills">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/#projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <div className="md:hidden px-2" onClick={handleNav}>
          <AiOutlineMenu color="#1f2833" size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75vw] sm:w-[60vw] md:w-[45vw] h-screen bg-[#c5c6c7] p-5 px-10 ease-in duration-500"
              : "fixed left-[-150vw] top-0 p-5 px-10 ease-in duration-600"
          }
        >
          <div>
            <div className="flex w-[full] items-center justify-between">
              <Image
                src="/Ranim/assets/RYLogo.png"
                width={45}
                height={45}
                alt="8"
              />
              <div
                onClick={handleNav}
                className="rounded-md bg-gray-300 shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose color="#1f2833" />
              </div>
            </div>
            <div className="border-b border-grey-300 mb-4">
              <p className="w-[85vw] md:w-[90vw] py-4 capitalize">
                Ranim Yassin | Flutter & Frontend web developer
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <b className="uppercase tracking-widest text-[#45a29e] ">
                let's Connect...
              </b>
              <div className="flex items-center justify-between mt-4 w-full sm:w-[80vw]">
                <div className="rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300">
                  <FaLinkedinIn color="/#45a29e" size={25} />
                </div>
                <div className="rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300">
                  <FaGithub color="/#45a29e" size={25} />
                </div>
                <div className="rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300">
                  <AiOutlineMail color="/#45a29e" size={25} />
                </div>
                <div className="rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300">
                  <BsPersonLinesFill color="/#45a29e" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
