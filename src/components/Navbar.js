import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='shadow-xl border-b-5 border-green-800 text-center fixed top-0 bg-green-400 font-bold w-full text-lg text-white'>
      <ul>
        <li className='inline-block py-4 hover:text-[#588157]'>
          <Link to='/' className='pl-10 pr-10'>
            Home
          </Link>
        </li>
        <li className='inline-block py-4 hover:text-[#588157]'>
          <Link to='/about' className='pl-6 pr-8'>
            About
          </Link>
        </li>
        <li className='inline-block py-4 hover:text-[#588157]'>
          <Link to='/articles-list' className='pl-6 pr-8'>
            Aritcles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;