import './Navbar.css'
import React, { useEffect } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import img from '../../assets/images.png'
const NavBar = () => {
    const navLinks=<>
    <div className=' w-fit flex flex-col md:flex-row  gap-4 justify-center items-center'>
    <Link className='p-2   text-xl font-bold  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-blue-500  hover:to-green-500   hover:w-fit cursor-pointer underline-animation ' to='/'> Home</Link>




    <Link className='p-2 underline-animation    text-xl font-bold  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500  hover:to-green-500    hover:w-fit cursor-pointer ' to='/'> Contact</Link>
    <Link className='p-2 underline-animation    text-xl font-bold  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500  hover:to-green-500  hover:w-fit cursor-pointer' to='/'> About Me</Link>
    
    </div>
    </>
    return (
        <div className=" ">
          <div className='navbar max-w-5xl mx-auto '>
  <div className="navbar-start">
  <div className="dropdown dropdown-hover  mr-10  lg:hidden ">
  <div tabIndex={0} role="button" className=" text-3xl"><RxDropdownMenu /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
  {navLinks}
  </ul>
</div>
  
   <h1 className='bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-blue-500  to-green-500'> ZxAYED</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10  ">
          <img className='rounded-xl' alt="Zayed" src={img} />
        </div></div>
  </div>
</div>
    );
};

export default NavBar;