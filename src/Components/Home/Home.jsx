import Banner from "./Banner";
import About from './About';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from "../Project/Project";
import Education from "../Others/Education";
import WHy from './../Others/WHy';
import Footer from "../Shared/Footer";



const Home = () => {
    useEffect(()=>{
        AOS.init();
      },[])


    return (
        <div className="#f4f6f0  ">
            <Banner></Banner>

            <About></About>
            <Project></Project>
            <Education></Education>
            <WHy></WHy>
            <Footer></Footer>
        </div>
    );
};

export default Home;