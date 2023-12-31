import React from 'react';
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <div className="navbar fixed z-10 bg-green-500 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
     <img src={logo} alt="" className='md:w-12 w-10 mr-3 ml-10'/>
     <div className='flex flex-col  text-white'>
     <a className=" text-xl md:font-bold">Dev Prepared</a>
     <p className="md:tracking-widest text-xl font-semibold">A c a d e m y</p>
     </div>
  </div>
  <div className="navbar-center navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal text-white font-bold px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
</div>
    );
};

export default Header;