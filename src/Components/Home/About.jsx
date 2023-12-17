import img from '../../assets/PXL_20220812_173141898 (1).jpg'
import Title from '../Shared/Title';
import { motion } from "framer-motion"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineCastForEducation } from "react-icons/md";
const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0" className="relative mt-28 max-w-5xl mx-auto">
            <Title title='Web Developer'></Title>
            <motion.div

                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >

                <div className='rounded-2xl z-10 shadow-md  hover:scale-105 hover:transition-transform hover:duration-500  hover:ease-in-out max-w-5xl mx-auto'  >


                    <section className="flex p-10 flex-col md:flex-row justify-center  gap-4">
                        <aside className="md:pr-12">


                            <h1 className='text-3xl font-bold  '>About Me </h1>
                            <p className='py-4'>Passionate MERN stack developer dedicated to creating engaging and responsive web applications for an
                                enhanced user experience. I'm also a physics student, currently pursuing my studies, blending my analytical
                                skills from the world of physics with the creativity and problem-solving mindset required in the realm of web
                                development.</p>
                            <div>
                                <div>
                                <p className='font-semibold text-lg py-4 flex  items-center gap-2'> <MdOutlineCastForEducation />Educational Background  :</p>
                                <p>  Bsc Honours in Physics</p>
         
                                </div>
                            </div>
                        </aside>

                        <aside>
                            <img className='rounded-2xl' src={img} alt="Zayed's Photo" />

                        </aside>
                    </section>
                </div>    </motion.div>
        </div>

    );
};

export default About;