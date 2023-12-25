import img from '../../assets/ge.png'
import img1 from '../../assets/link.png'
import img3 from '../../assets/ge.png'
import React, { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { VscGithubInverted } from "react-icons/vsc";
import img4 from '../../assets/ge.png'
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const form = useRef();
    const Handletoast =(e)=>{
        e.preventDefault()
    
        console.log(form.current);

     
        // toast.error('Nodemailer/mailGun is not implemented yet')
        emailjs.sendForm('service_egkatwc', 'template_fbooafa',  form.current , 'MDtsHWY2UH56rpDsB')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
    }
    return (
        <div className="hero h-[90vh] " id="contactSection" style={{backgroundImage: `url(https://i.ibb.co/QcbsFHy/footer.jpg)`}}>
        <div className="hero-overlay transition-opacity opacity-30 bg-blend-overlay bg-cover  bg-gradient-to-r from-[#3d3b3b] to-[#484747]  "></div>
        <div className="hero-content items-start max-w-5xl text-[#81C3D2] ">
          <div className="">
            <img className='w-40 h-32 mx-auto' src={img} alt="" />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-20'>
                <div className='flex flex-col justify-center gap-2 text-5xl items-center'>
                <FaMapLocationDot /> <p className='text-xl '> Dhaka, Bangladesh</p>
                </div>
                <div className='flex flex-col justify-center gap-2  text-5xl items-center'>
                <MdPhoneAndroid /> <p className='text-xl '> 01902320296</p>
                </div>
                <div className='flex flex-col justify-center gap-2  text-5xl items-center'>
                <SiGmail /><p className='text-xl '> zzayediqbalofficial@gmail.com</p>
                </div>
                <div className='flex flex-col justify-center gap-2  text-5xl items-center'>
                <a href="https://www.linkedin.com/in/zayed-iqbal"><FaLinkedin /></a> <p className='text-xl '>Linkedin</p>
                </div>
               
            </div>
            <section className='flex flex-col md:flex-row gap-6 mt-20'>
                    <div className='md:w-1/4 '>
                    <h1 className='text-3xl font-bold'> Lets Connect</h1>
                    <div className='flex  justify-start mt-6 gap-2  text-5xl items-center'>
                <a href="https://github.com/ZxAYED"> <VscGithubInverted /></a> 
               <p className='text-xl '> GitHub</p>
               </div>
                    <div className='flex justify-start gap-2 mt-6 text-5xl items-center'>
                <a href="https://www.facebook.com/ZxAYED"><FaFacebookSquare /></a> <p className='text-xl '>Facebook</p>
                </div>
                <div className='flex  justify-start mt-6 gap-2  text-5xl items-center'>
                <a href="https://www.instagram.com/zzayed0"> <GrInstagram /></a> 
               <p className='text-xl '> Instagram</p></div>
              
                   
               
               </div>
              
                 
                    <div className='flex-1' data-aos="fade-up"
     data-aos-duration="1000">
                    <h1 className='text-3xl font-bold'> Leave a message</h1>
<form ref={form}  onSubmit={Handletoast} className='mt-10 ' action="">
    <div className='flex flex-col md:flex-row gap-6 '>
<input name='name' type="text" placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />
<input  name='email' type="text" placeholder="Your Email" className="input input-bordered input-accent w-full max-w-xs" /></div>
<input name='description' type='textarea'  className="textarea textarea-accent mt-6 w-full lg:w-[664px]" placeholder="Your message"/>
<div className='mx-auto flex items-center justify-center pt-10 '><button  type='submit' className=' btn hover:border-none hover:shadow-2xl  border-[#004080]      w-fit cursor-pointer px-4 py-2 rounded-xl '> Send</button></div>
<ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</form>
                    </div>
                </section>
               
            
          </div>
        </div>
      </div>
    );
};

export default Footer;