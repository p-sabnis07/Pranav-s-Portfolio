import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  let social = [
    {
      id: 1,
      color: "bg-blue-600",
      child: (
        <>
          <FaLinkedin size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://www.linkedin.com/in/pranav-sabnis-a52695234/",
    },
    {
      id: 2,
      color: "bg-gray-600",
      child: (
        <>
          <FaGithub size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://github.com/p-sabnis07",
    },
    {
      id: 3,
      color: "bg-red-600",
      child: (
        <>
          <AiOutlineMail size={30} className="ml-2 text-white" />
        </>
      ),
      link: "mailto:psabnis07@gmail.com",
    },
    {
      id: 4,
      color: "bg-blue-500",
      child: (
        <>
          <FaTwitter size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://twitter.com/pranav_sabnis",
    },
    {
      id: 5,
      color: "bg-green-500",
      child: (
        <>
          <BsPersonLinesFill size={30} className="ml-2 text-white" />
        </>
      ),
      link: "https://drive.google.com/file/d/1Z7KEbZ1YYrqX6lGNUcH3iNIarRM3qpTa/view?usp=sharing",
    },
  ];

  return (
    <div
      name="Contact"
      className="w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4 pt-24"
    >
      <div className=" md:hidden flex justify-center items-center bottom-[35%]">
        <ul className="flex justify-center items-center">
          {social.map(({ id, color, child, link }) => {
            return (
              <li
                key={id}
                className={`flex justify-center items-center h-1/1 mt-[-10%] py-3 px-2  hover:rounded-md hover:mt-[-15%] duration-500 ${color} cursor-pointer`}
              >
                <a
                  className="flex text-white font-bold"
                  href={link}
                  download="true"
                  target="_blank"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col p-4 justify-center max-w-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>

          <p className="py-2">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7f527d7a-d9f1-486f-8794-7bfd0c97fc18"
            method="POST"
            className="flex flex-col w-full md:w-3/3"
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />

            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="8"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-purple-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold">
              Let's Talk
            </button>
          </form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Contact;
