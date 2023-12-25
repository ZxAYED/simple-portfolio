
import { motion } from 'framer-motion';
import Buttons from '../Shared/Buttons';

const Card = ({ item }) => {
    console.log(item);
    return (
        <motion.div

            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            <div className="overflow-hidden   hover:scale-105 hover:transition-transform hover:duration-500   hover:ease-in-out rounded-2xl z-10    hover:bg-[#ebeee5] py-6  ">


                <div className="">
                    <div className=''>

                        <p className="block text-center  mt-2 pb-4 font-bold text-3xl   transition-colors duration-300 transform  ">{item.projectName}</p>
                        <p className="mt-2 text-lg  px-6"> <span className="font-bold">Project Details : </span>{item.description}</p>

                        <div className="flex flex-col md:flex-row px-6 justify-center items-center gap-5 py-16 ">

                            <p className="mt-2 text-lg md:w-1/2 text-left pb-4"> <span className="font-bold text-xl">Features : </span>{item.features.map(data => (<li key={data} className="py-2  "> {data}   </li>))}</p>

                            <div className=" md:w-1/2">
                                <img className="object-cover w-fit  rounded-lg h-64" src={item.imageUrl} alt="Article" /></div>
                        </div>
                    </div>

                    <div className=" -my-8">
                        <div className="flex justify-center gap-6  rounded-2xl">

                   <a href={item.liveLink}> <Buttons heading={'Preview'}></Buttons></a>

                   <a href={item.githubClientCode}>  <Buttons heading={'Client Link'}></Buttons></a>

                   <a  href={item.githubServerCode}>  <Buttons heading={'Server Link'}></Buttons></a>

                        </div>
                    </div>
                </div>
            </div></motion.div>
    );
};

export default Card;