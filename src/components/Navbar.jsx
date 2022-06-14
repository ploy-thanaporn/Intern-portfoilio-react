import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaFacebook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="font-bold">
        <h2 className="text-xl text-sky-400">Portfolio</h2>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:border-sky-400 border-transparent border-b-[3px]"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:border-sky-400 border-transparent border-b-[3px]"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:border-sky-400 border-transparent border-b-[3px]"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:border-sky-400 border-transparent border-b-[3px]"
          >
            Experince
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:border-sky-400 border-transparent border-b-[3px]"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-xl">Home</li>
        <li className="py-6 text-xl">About</li>
        <li className="py-6 text-xl">Skills</li>
        <li className="py-6 text-xl">Experince</li>
        <li className="py-6 text-xl">Contact</li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/tnpsp.ploy/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ploy-thanaporn"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/"
            >
              Email <AiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
