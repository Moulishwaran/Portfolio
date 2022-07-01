import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <div className="text-5xl font-signature ml-2 color-black text-pink-600">
          Moulishwaran
        </div>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-pink-600">
          <Link to="home" smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="about" smooth={true} duration={400}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="skills" smooth={true} duration={400}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="project" smooth={true} duration={400}>
            Project
          </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link to="contact" smooth={true} duration={400}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={400}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={400}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={400}>
            Project
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={400}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-center">
            <a
              className="flex justify-between items-center  w-full text-gray-300"
              href="https://www.linkedin.com/in/moulish-waran-005a711a0/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center  w-full text-gray-300"
              href="https://github.com/Moulishwaran"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] sm:text-left">
            <a
              className="flex justify-between items-center  w-full text-gray-300"
              href="https://drive.google.com/file/d/1OQf_UpQ_jiTmc3uEp9S6uetniNE28hUR/view?usp=sharing"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
