import React from "react";
import HeroImage from "../images/heroImage3.jpg";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home" id="home" 
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center py-8 px-2 lg:justify-evenly">
          <h2 className="text-3xl sm:text-5xl font-bold text-white md:py-3 text-shadow">
            One-Stop Web Solution
          </h2>
          <p>
            Need A Website? Looking For A Web Developer? Then You Have Come To
            The Right Place! 
            My goal is to create responsive, fast and user
            friendly website for individuals and organizations, using the latest
            techniques and trends.</p>
         
          <div className="py-4 md:py-5">
            <Link to="Skills" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg shadow-blue-500/50 ">
              My Skills
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightCircleLine size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="HeroImage"
            className="rounded-xl mx-auto w-4/3 md:w-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
