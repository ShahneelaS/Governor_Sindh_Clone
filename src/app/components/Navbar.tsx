"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#0b3e6f] text-white py-4 shadow-md fixed top-0 left-0 w-full z-50 relative">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="absolute top-12 left-4 transform -translate-y-1/2">
          <Image
            src="/images/logo.png"
            alt="Governor Sindh Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          />
        </div>

        {/* Heading */}
        <div className="w-full text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            <span className="block md:hidden">Tuition Fee Program</span>
            <span className="hidden md:block">
              Tuition Free Education Program on Latest Technologies
            </span>
          </h1>
        </div>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#apply" className="hover:text-gray-300">Apply</a></li>
          <li><a href="#jobs" className="hover:text-gray-300">Jobs</a></li>
          <li><a href="#result" className="hover:text-gray-300">Result</a></li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-300 focus:outline-none flex items-center"
            >
              Courses
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-gray-800 shadow-lg rounded-lg py-2 w-64 z-10">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <span className="font-bold">Core Courses</span>
                  <ul className="ml-6 list-disc text-sm">
                    <li className="py-1 hover:bg-gray-200">Programming Fundamentals</li>
                    <li className="py-1 hover:bg-gray-200">Web2 Using NextJS</li>
                    <li className="py-1 hover:bg-gray-200">Earn as You Learn</li>
                  </ul>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <span className="font-bold">Advanced Courses</span>
                  <ul className="ml-6 list-disc text-sm">
                    <li className="py-1 hover:bg-gray-200">Web 3 and Metaverse</li>
                    <li className="py-1 hover:bg-gray-200">Cloud-Native Computing</li>
                    <li className="py-1 hover:bg-gray-200">Artificial Intelligence</li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-gray-300 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-[#0b3e6f] text-white py-4 px-4 space-y-4">
          <li><a href="#home" className="block hover:text-gray-300">Home</a></li>
          <li><a href="#apply" className="block hover:text-gray-300">Apply</a></li>
          <li><a href="#jobs" className="block hover:text-gray-300">Jobs</a></li>
          <li><a href="#result" className="block hover:text-gray-300">Result</a></li>
          <li>
            <button
              onClick={toggleDropdown}
              className="block hover:text-gray-300 focus:outline-none"
            >
              Courses
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            {isDropdownOpen && (
              <ul className="bg-white text-gray-800 shadow-lg rounded-lg py-2 mt-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <span className="font-bold">Core Courses</span>
                  <ul className="ml-6 list-disc text-sm">
                    <li className="py-1 hover:bg-gray-200">Programming Fundamentals</li>
                    <li className="py-1 hover:bg-gray-200">Web2 Using NextJS</li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
