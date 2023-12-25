import './Navbar.css'
import img from '../../assets/profile.jpg'
import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import { RxDropdownMenu } from "react-icons/rx";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import Headroom from 'react-headroom';
// import img from '../../assets/images.png'
const NavBar = () => {

  
    
 
   

    const navLinks=<>
    <div className=' w-fit flex flex-col lg:flex-row  gap-4 justify-center items-center'>
    <Link spy={true}           
  smooth={true}         
  offset={-70}         
  duration={500} className='p-2   text-xl font-bold  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r  hover:from-purple-500 hover:via-blue-500  hover:to-green-500   hover:w-fit cursor-pointer underline-animation ' to='home'> Home</Link>




       
    <Link to="aboutSection"   
  spy={true}           
  smooth={true}         
  offset={-70}         
  duration={500}  className='p-2 underline-animation    text-xl font-bold  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500  hover:to-green-500  hover:w-fit cursor-pointer' > About Me</Link>
 
    <Link  to="contactSection"    
  spy={true}           
  smooth={true}         
  offset={-70}           
  duration={500}   className='p-2 underline-animation    text-xl font-bold  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500  hover:to-green-500    hover:w-fit cursor-pointer ' > Contact Me</Link>
    
    </div>
    </>
    return (
      <Headroom 
      style={{
        background: 'transparent', 
        boxShadow: 'none',         
        transition: '0.3s ease-in-out',
      }}
      onPin={() => {

        return {
          background: '#ffffff', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        };
      }}
      onUnpin={() => {
       
        return {
          background: 'transparent', 
          boxShadow: 'none',         
        };
      }}
      >
        <div  className=" ">
          <div className='navbar max-w-5xl mx-auto '>
  <div className="navbar-start">
  <div className="dropdown dropdown-hover  mr-10  lg:hidden ">
  <div tabIndex={0} role="button" className=" text-3xl"><RxDropdownMenu /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
  {navLinks}
  </ul>
</div>
<motion.div

whileHover={{ scale: 1.01 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 400, damping: 30 }}
>

   <h1 className='bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500  to-green-500'> ZAYED</h1></motion.div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10  ">
  <motion.div

whileHover={{ scale: 1.01 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 400, damping: 30 }}
> <img className='rounded-full' alt="Zayed" src={img} /> </motion.div>
        </div></div>
  </div>
</div>
</Headroom>
  
    );
};

export default NavBar;