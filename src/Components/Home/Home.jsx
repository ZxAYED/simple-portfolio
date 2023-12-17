import Banner from "./Banner";
import About from './About';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(()=>{
        AOS.init();
      },[])


    return (
        <div className="#f4f6f0  ">
            <Banner></Banner>

            <About></About>
        </div>
    );
};

export default Home;