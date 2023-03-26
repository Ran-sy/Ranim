import React from "react";
import Image from "next/image";
import { send } from "emailjs-com";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

function Contact() {
  const form = React.useRef();
  const inputName = React.useRef();
  const inputNumber = React.useRef();
  const inputEmail = React.useRef();
  const inputSubject = React.useRef();
  const inputMessage = React.useRef();

  let formData = {
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  };

  React.useEffect(() => {
    form?.current?.addEventListener("submit", (e) => handleSubmit(e));
    return form.current.removeEventListener("submit", (e) => handleSubmit(e));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.name = inputName?.current?.value || "";
    formData.number = inputNumber?.current?.value || "";
    formData.email = inputEmail?.current?.value || "";
    formData.subject = inputSubject?.current?.value || "";
    formData.message = inputMessage?.current?.value || "";

    send("service_gibnqoa", "template_rv8cp49", formData, "A6Y4mKhcdcOPf1Lvz")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        inputName.current.value = "";
        inputNumber.current.value = "";
        inputEmail.current.value = "";
        inputSubject.current.value = "";
        inputMessage.current.value = "";
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-6xl m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#45a29e] font-bold">
          Contact
        </p>
        <h2 className="py-4 indent-2">Get In Touch...</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-gray-300">
            <div>
              <div>
                <Image
                  src="/Ranim/assets/contactMe.jpg"
                  alt="/contact me"
                  width={800}
                  height={500}
                  priority={true}
                  className="p-4 rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="text-[#45a29e] tracking-wider">Ranim</h2>
                <p className="py-2 indent-2 text-gray-700">
                  Flutter & Frontend developer
                </p>
                <p className="py-2">
                  I am available now for freelance or full-time positions.
                  Contact me and let us talk together
                </p>
              </div>
            </div>
            <div>
              <p className="uppercase pt-4 font-serif">
                You can connect with me on...
              </p>
              <div className="flex items-center justify-around py-4">
                <div className="bg-gray-200 rounded-md shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:rotate-12 duration-300">
                  <a
                    href="https://www.linkedin.com/in/ranim-t-a36483182/"
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
                <div className="bg-gray-200 rounded-md shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:rotate-12 duration-300">
                  <a href="https://github.com/Ran-sy" target="_blank">
                    <FaGithub size={20} />
                  </a>
                </div>
                <div className="bg-gray-200 rounded-md shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:rotate-12 duration-300">
                  <a href="mailto:ranim.1999.ta@gmail.com" target="_blank">
                    <AiOutlineMail size={20} />
                  </a>
                </div>
                <div className="bg-gray-200 rounded-md shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 hover:rotate-12 duration-300">
                  <a href="tel:+201147675444" target="_blank">
                    <BsPersonLinesFill size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 bg-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} action="post">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name:
                    </label>
                    <input
                      id="name"
                      ref={inputName}
                      type="text"
                      name="Name"
                      placeholder="Full Name"
                      required
                      className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="number" className="uppercase text-sm py-2">
                      Phone Number:
                    </label>
                    <input
                      id="number"
                      ref={inputNumber}
                      type="text"
                      inputMode="numeric"
                      name="Number"
                      required
                      placeholder="+201111111111"
                      className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email:
                  </label>
                  <input
                    id="email"
                    ref={inputEmail}
                    type="email"
                    inputMode="email"
                    name="Email"
                    placeholder="Email@somthing.com"
                    required
                    className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject:
                  </label>
                  <input
                    id="subject"
                    ref={inputSubject}
                    type="text"
                    name="Subject"
                    required
                    placeholder="Purpose"
                    className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    ref={inputMessage}
                    name="Message"
                    required
                    placeholder="Your message"
                    className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-green-900 text-gray-100 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="bg-gray-200 rounded-md shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:rotate-12 duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#45a29e]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
