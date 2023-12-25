import img from '../../assets/PXL_20220812_173141898 (1).jpg'
import html from '../../assets/icons8-html-5-240.png'
import css from '../../assets/icons8-css3-144.png'
import tailwind from '../../assets/icons8-tailwindcss-240.png'
import boot from '../../assets/icons8-bootstrap-240.png'
import mate from '../../assets/material ui.png'
import js from '../../assets/icons8-js-240.png'
import mongo from '../../assets/mongodb.png'
import xpress from '../../assets/expressJs.png'
import react from '../../assets/react.png'
import node from '../../assets/nodeJs.png'
import Title from '../Shared/Title';
import { motion } from "framer-motion"
import { useEffect } from "react";
import { SiExpertsexchange } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi2";
import { TfiHtml5 } from "react-icons/tfi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineCastForEducation } from "react-icons/md";
const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div  data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0" className="relative mt-28 max-w-5xl mx-auto">
            <Title title='Web Developer'></Title>
            <motion.div

                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >

                <div className=' rounded-2xl z-10 shadow-md  hover:scale-105 hover:transition-transform hover:duration-500  hover:ease-in-out max-w-5xl mx-auto'  >


                    <section className="flex  p-10 flex-col-reverse  md:flex-row justify-center  gap-4">
                        <aside className="md:pr-12 md:w-1/2 text-lg">


                            <h1 className='text-3xl font-bold  '>About Me </h1>
                            <p className='py-4'>Passionate MERN stack developer dedicated to creating engaging and responsive web applications for an
                                enhanced user experience. I'm also a physics student, currently pursuing my studies, blending my analytical
                                skills from the world of physics with the creativity and problem-solving mindset required in the realm of web
                                development.</p>
                            <div>
                            <div className="divider my-2"></div>
                                <div>
                                <p className='font-semibold justify-start text-xl pb-4 pt-2 flex  items-center gap-2'>  <HiAcademicCap /> Academic Background  </p>
                                <p  className='  flex   gap-2'> <span className='text-xl pt-1'></span>  Currently studying my Honours in physics at Govt Titumir College, delving into the wonders of the universe with enthusiasm and curiosity</p>
         
                                </div>
                                <div className="divider my-2"></div>
                                <div>
                                <p className='font-semibold  text-xl pb-6 pt-2 flex  items-center gap-2'> <SiExpertsexchange />Skills  </p>
                                <p className='  flex flex-wrap  gap-2 justify-start items-center  '>
                                    <span className='flex pr-4  justify-center items-center'> <img className='w-8 h-8' src={html} alt="html" />Html </span>
                                    <span className='flex pr-4  justify-center items-center'> <img className='w-8 h-8' src={css} alt="css" />Css </span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={tailwind} alt="tailwind" />Tailwind CSS</span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={boot} alt="boot" />BootStrap </span>
                                    <span className='flex pr-4 gap-1 justify-center items-center'> <img className='w-8 h-8' src={mate} alt="material ui" />Material UI </span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={js} alt="js" />JavaScript </span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={react} alt="react" />React js </span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={mongo} alt="mongodb" />Mongo DB </span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={xpress} alt="xpress" />Express Js </span>
                                    <span className='flex pr-4 gap-1  justify-center items-center'> <img className='w-8 h-8' src={node} alt="node" />Node Js </span>
                                  
                                    

                                  </p>
         
                                </div>
                                
                            </div>
                        </aside>

                        <aside id="aboutSection" className=' md:w-1/2 '>
                            <img className='rounded-2xl' src={img} alt="Zayed's Photo" />

                        </aside>
                    </section>
                </div>    </motion.div>
        </div>

    );
};

export default About;