import React, { useState } from 'react';
import { FaBars, FaUser  } from 'react-icons/fa';

export default function Test() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between flex-wrap py-6 container mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Your Logo</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-gray-500 hover:text-white"
            onClick={toggleMenu}
          >
            <FaBars className="hamburger-icon" />
          </button>
        </div>
        <div className="hidden lg:block w-full lg:flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
              Home
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
              About
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <button className="text-gray-500 hover:text-white mr-4">
              <FaUser />
            </button>
            <button className="bg-gray-700 text-white hover:bg-gray-600 py-2 px-4 rounded">
              Log In
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
              Home
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
              About
            </a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );

}


