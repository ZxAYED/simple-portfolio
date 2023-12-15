import { Parallax, Background } from 'react-parallax';
import img from '../../assets/banner 2.jpg'
const Banner = () => {
    return (
        <Parallax
        blur={{ min: -1, max: 150 }}
 
      bgImage={img}
        bgImageAlt="the dog"
        strength={200}
    
    >
         <div className='h-[250vh]'>   Blur transition from min to max</div>
     
       
    </Parallax>
    );
};

export default Banner;