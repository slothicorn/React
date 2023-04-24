import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-blue-400">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="group p-4">
          <a href="#about">About</a>
          <div className="mx-auto mt-2 h-[2px] w-0 border-b border-b-blue-400 opacity-0 duration-200 group-hover:w-3/4 group-hover:opacity-100"></div>
        </li>
        <li className="group p-4">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <div className="mx-auto mt-2 h-[2px] w-0 border-b border-b-blue-400 opacity-0 duration-200 group-hover:w-3/4 group-hover:opacity-100"></div>
        </li>
        <li className="group p-4">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer">
            TailwindCSS
          </a>
          <div className="mx-auto mt-2 h-[2px] w-0 border-b border-b-blue-400 opacity-0 duration-200 group-hover:w-3/4 group-hover:opacity-100"></div>
        </li>
        <li className="group p-4">
          <a
            href="https://github.com/mattboldt/typed.js"
            target="_blank"
            rel="noopener noreferrer">
            Typed.js
          </a>
          <div className="mx-auto mt-2 h-[2px] w-0 border-b border-b-blue-400 opacity-0 duration-200 group-hover:w-3/4 group-hover:opacity-100"></div>
        </li>
        <li className="group p-4">
          <a href="#top">Contact</a>
          <div className="mx-auto mt-2 h-[2px] w-0 border-b border-b-blue-400 opacity-0 duration-200 group-hover:w-3/4 group-hover:opacity-100"></div>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out'
            : 'fixed left-[100%]'
        }>
        <h1 className="m-4 w-full pt-3 text-3xl font-bold text-blue-400">
          REACT.
        </h1>
        <ul className="p-4 uppercase">
          <li className="group border-b border-b-gray-600 p-4 duration-300 hover:border-b-blue-500">
            <a
              href="#about"
              className="duration-300 group-hover:text-blue-400">
              About
            </a>
          </li>
          <li className="group border-b border-b-gray-600 p-4 duration-300 hover:border-b-blue-500">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 group-hover:text-blue-400">
              React
            </a>
          </li>
          <li className="group border-b border-b-gray-600 p-4 duration-300 hover:border-b-blue-500">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 group-hover:text-blue-400">
              TailwindCSS
            </a>
          </li>
          <li className="group border-b border-b-gray-600 p-4 duration-300 hover:border-b-blue-500">
            <a
              href="https://github.com/mattboldt/typed.js"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 group-hover:text-blue-400">
              Typed.js
            </a>
          </li>
          <li className="group border-b border-b-gray-600 p-4 duration-300 hover:border-b-blue-500">
            <a
              href="#top"
              className="duration-300 group-hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
