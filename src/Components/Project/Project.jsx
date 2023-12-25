
import { motion } from 'framer-motion';
import Title from '../Shared/Title';
import { useEffect, useState } from 'react';
import Card from './Card';

const Project = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/Api.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return (  <div className="max-w-5xl mx-auto relative  mt-20 pb-10">
         <h1 className=' absolute -top-10 md:-top-10  opacity-10 md:left-[20%]  md:right-[20%] mx-auto text-center  text-6xl font-bold ' >Projects</h1>
        <motion.div
              
            >

      <div className='rounded-2xl z-10    '>
       <div className='rounded-xl p-4 pt-8'>
        <h1 className='text-center text-3xl z-10  font-bold'>Showcasing My Digital Ventures</h1> 
        <p className='py-6 text-xl  text-center'>Explore a collection of my innovative digital ventures, including a philanthropic food sharing platform, a tech-infused matrimony website, and a game event management system. Each project harmonizes cutting-edge technologies, user-friendly interfaces, and captivating designs, reflecting my passion for creating impactful digital experiences</p>
        </div>
        <section className='grid grid-cols-1 mt-10 gap-6'>
   {
    data.map(item=> <Card key={item.projectId} item={item}></Card>)
   }
        
        </section>
        </div>
        </motion.div>
        </div>
    );
};

export default Project;