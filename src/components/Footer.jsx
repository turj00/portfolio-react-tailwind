import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer class="flex justify-center px-4 py-2 text-white bg-gradient-to-b from-black to-gray-800 border-t-4 border-indigo-500 border-in">
        <div class="container py-6">
          <h1 class="text-lg font-bold text-center lg:text-2xl">
            Looking for a web developer? <br /> Shoot me an email, I'll
            contact you as soon as I can
          </h1>

          <div className="flex justify-center mt-6">
            <div className="bg-white border rounded-md focus-within:ring focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 ">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent"
                  placeholder="Message"
                  aria-label="Enter your email"
                />
                <button class="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded-md  lg:w-auto hover:bg-yellow-400 hover:text-black hover:font-bold">
                  Send Mail
                </button>
              </div>
            </div>
          </div>

          <div class="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700">
            {" "}
          </div>

          <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <Link to="Home" smooth duration={500}
                href="#home"
                class="text-xl font-bold text-white transition-colors duration-300 dark:text-white hover:text-yellow-400"
              >
                Galib Ahmed
              </Link>
            </div>

            <div class="flex mt-4 md:m-0">
              <div class="-mx-4">
                <Link
                  to="About" smooth duration={500}
                  class="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 cursor-pointer hover:text-white hover:underline"
                >
                  About
                </Link>
                <Link
                  to="Skills" smooth duration={500}
                  class="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-white cursor-pointer  hover:underline"
                >
                  Skills
                </Link>
                <a
                  href="mailto:galib.ahmed@dsinnovators.com"
                  class="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-white hover:underline"
                >
                  Mail Me
                </a>

                <a
                  href="tel:+8801741402914"
                  class="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-white hover:underline"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
