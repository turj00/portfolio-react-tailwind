import React from "react";

import html from "../images/skills/html.png";
import css from "../images/skills/css3.png";
import javascript from "../images/skills/javascript.svg";
import reactImage from "../images/skills/react.png";
import java from "../images/skills/java.png"
import tailwind from "../images/skills/tailwind.png";
// import tailwind from "../images/skills/tailwind.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-green-600",
    },

    {
      id: 6,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    // {
    //   id: 5,
    //   src: tailwind,
    //   title: "Tailwind",
    //   style: "shadow-sky-400",
    // },

  ];

  return (
    <div
      name="Skills" id="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full p-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center p-4">
          <p className="text-4xl font-bold border-b-4 border-yellow-400 p-2 inline">
            Skills
          </p>
      
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-12 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
