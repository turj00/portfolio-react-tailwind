import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Testimonials",
    },
  ]; 

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed border-b-2 border-gray-500 z-10">
      <div>
        <h1 className="text-white font-bold font-name text-xl ml-2 hover:scale-105 duration-500">
          <span className="text-yellow-400">&#60; </span> Galib Ahmed{" "}
          <span className="text-yellow-400">/&#62;</span>
        </h1>
      </div>

      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300 hover:text-black hover:font-semibold hover:bg-yellow-400 hover:rounded-full"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex px-6">
        <button class="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-blue-500/50 px-6 py-1 rounded-lg animate-pulse font-bold hover:scale-110 duration-300 hover:animate-none">
          <a href="tel:+8801741402914">Contact Me</a>
        </button>
      </div>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={25} className="hover:text-white duration-300" /> : <FaBars size={25} className="hover:text-yellow-400 duration-300" />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-3xl hover:text-4xl duration-300 hover:text-yellow-400 "
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
