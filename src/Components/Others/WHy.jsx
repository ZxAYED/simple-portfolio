import img1 from '../../assets/tech.webp'
import img2 from '../../assets/buss.png'
import img4 from '../../assets/comm.png'
import img3 from '../../assets/ad.png'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WHy = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="max-w-5xl  mx-auto relative mt-10   pb-20" >
            <h1 className=' absolute -top-10 md:-top-10  opacity-10 md:left-[10%]  md:right-[10%] mx-auto text-center  text-6xl font-bold ' >Why You need me</h1>

            <div className="  rounded-2xl">
                <h1 className="text-center py-6 font-bold text-4xl">Why Choose Me ?</h1>
                <p className="text-center text-lg">I bring a mix of tech skills and business know-how. As a seasoned MERN Stack Developer and Sales Executive, here's why teaming up with me makes sense:</p>
                <section className="grid grid-cols-1 md:grid-cols-2 md:p-10 gap-6 text-center text-lg ">
                    <motion.div
                        data-aos="fade-down-right"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <aside className='shadow p-6 rounded-3xl h-[300px]'>
                            <h1 className="text-3xl font-bold flex justify-center gap-4 items-center "> <img className='object-fit w-16 h-16' src={img1} alt="" />Technical Prowess</h1>
                            <p className="pt-6 pb-2 "> Proficient in JavaScript, React Js, MongoDb, Node Js, and Express Js. Successfully developed innovative platforms like RizkShare Matrimony and a revolutionary Food Donation project.</p>
                        </aside>
                    </motion.div>
                    <motion.div
                        data-aos="fade-down-left"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <aside className='shadow p-6 rounded-3xl h-[300px]'>
                            <h1 className="text-3xl font-bold flex justify-center gap-4 items-center "> <img className='object-fit rounded-full w-16 h-16' src={img2} alt="" /> Business Acumen </h1>
                            <p className="pt-6 pb-2 ">A proven Sales Executive with a strategic approach to client interactions. Demonstrated strong management skills and business insights as a Business Operator at Mobile World.</p>
                        </aside>
                    </motion.div>
                    <motion.div
                        data-aos="fade-up-right"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <aside className='shadow p-6 rounded-3xl h-[300px]'>
                            <h1 className="text-3xl font-bold flex justify-center gap-6   text-center items-center "> <img className='object-fit rounded-full w-16 h-16' src={img3} alt="" />Quick Learning  <br />& Adaptability</h1>
                            <p className="pt-6 pb-2 "> Enthusiastic learner with a natural curiosity and eagerness to stay updated on the latest technologies. Adaptable mindset, thriving in dynamic environments and embracing challenges.</p>
                        </aside>
                    </motion.div>
                    <motion.div
                        data-aos="fade-up-left"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <aside className='shadow p-6 rounded-3xl h-[300px]'>
                            <h1 className="text-3xl font-bold gap-6 flex justify-center items-center "> <img className='object-fit w-16 h-16' src={img4} alt="" />Effective <br /> Communication </h1>
                            <p className="pt-6 pb-2 "> With a background in sales and development, I bring effective communication skills to the table, ensuring smooth collaboration and project success.</p>
                        </aside>
                    </motion.div>
                </section>


            </div>
        </div>
    );
};

export default WHy;