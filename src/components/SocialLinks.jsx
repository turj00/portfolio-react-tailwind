import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/galib-ahmed-turjo-129295238/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/turj00",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:galib.ahmed@dsinnovators.com",
    },

    {
      id: 4,
      child: (
        <>
          Download Resume <BsFillPersonLinesFill size={40} />
        </>
      ),
      href: "/sample.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-30">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-blue-800 bg-gray-500 font-bold" + " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>
                {child}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
