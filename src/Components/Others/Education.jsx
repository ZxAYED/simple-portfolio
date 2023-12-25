import { MdSensorOccupied } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { motion } from 'framer-motion';
const Education = () => {
    return (
        
        <div className="max-w-5xl  mx-auto relative mt-10   pb-20">
            <h1 className=' absolute -top-10 md:-top-10  opacity-10 md:left-[10%]  md:right-[10%] mx-auto text-center  text-6xl font-bold ' >Skills & Experiences</h1>
            <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
            <div className=" border-2 p-6 rounded-2xl">
      
            <h1 className="text-center pt-6 font-bold text-4xl"> Professional Odyssey & Soft Skills</h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">


                <aside className=" md:border-r-2">
                    <h1 className="text-2xl flex  items-center gap-2 font-semibold "> <MdSensorOccupied /> Professional Experience </h1>
                    <p className="text-lg pt-6 "> <span className="font-medium">Position :</span> Sales-Executive</p>
                    <p className="text-lg  py-1"><span className="font-medium">Company :</span> Mobile World . Uttara,Dhaka.  </p>
                    <p className="text-lg pt-6 "> <span className="font-medium">Position :</span> Business Operator</p>
                    <p className="text-lg  py-1"><span className="font-medium">Company :</span>Sun Brand . Uttara,Dhaka.  </p>
                </aside>

                <aside className="md:pl-20  ">
                    <h1 className="text-2xl  flex  items-center gap-2 font-semibold "> <GiSkills />Soft Skills </h1>
                  

                 
                    <li className="text-lg pt-4 ">Self-motivated </li>
                    <li className="text-lg py-1 "> Dedicated hard worker</li>
                    <li className="text-lg py-1 "> Strong management skills</li>
                    <li className="text-lg py-1 "> Active</li>
                    <li className="text-lg py-1 "> Quick learner</li>
                    <li className="text-lg py-1 "> Attentive listener</li>
                   
                </aside>
                
            </section>
            </div> </motion.div> 
        </div>
     
    );
};

export default Education;