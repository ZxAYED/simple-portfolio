import { TypeAnimation } from 'react-type-animation';
import img from '../../assets/IMG_20231216_120550.jpg'
import Buttons from '../Shared/Buttons';
import { motion } from "framer-motion"
const Banner = () => {
  
    return (
      <motion.div
      
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
    
      <div className='max-w-5xl mx-auto  px-6 rounded-2xl shadow-md  hover:scale-105 hover:transition-transform hover:duration-500  hover:ease-in-out pb-10  mt-20'>
        
        <div className='text-center relative mx-auto'>
          <h1 className=" text-6xl font-bold">  Hi,I am  Zayed </h1>
          <h1 className=" text-3xl py-5 font-bold">  <TypeAnimation
      sequence={[
 
        'MERN Stack Developer',
        1500, 
        'Learner',
        1000,
        'Web Developer',
        1000,
        'Full-Stack Developer with MERN',
        1000,
      
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
    <p className="text-semibold w-1/2 mx-auto flex justify-center items-center text-xl ">Passionate MERN stack developer dedicated to creating engaging and responsive web applications for an enhanced user experience.</p>
   
    <a href="https://drive.google.com/file/d/1AgaQL_hVKb6qKIO6ajBz63zceElNPuDZ/view?usp=sharing"  ><Buttons heading='See Resume'></Buttons></a>
        </div>
     
     
       
  </div>
  </motion.div>
    );
};

export default Banner;