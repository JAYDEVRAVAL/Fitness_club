import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import hero_image from "../assets/hero_image.png";
  import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition = {type:'spring',duration:'3'}
  const mobile  =window.innerWidth<=768?true:false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div 
           initial = {{left:mobile?"172px":"238px"}}
           whileInView={{left:'6px'}}
           transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>The best Fitness center in town</span>
        </div>

        {/* hero heading */}

        <div className="hero-heading">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            Ideal body
          </div>
          <div>
            <span>
               At here we will help you to shape and build your ideal body and live up to your life fullest and give you best experience.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={40} delayed='4' preFix="+" />
            </span>
            <span>Expert coachs</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={878}
            delayed='4' preFix="+" /></span>
            <span>Members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={20} delayed='5' preFix="+"/></span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join now</button>
        <motion.div initial={{right:'-1rem'}} whileInView={{right:'4rem'}} transition={{...transition,duration:'3',type:'tween'}} className="heart-rate">
          <img src={Heart} alt='' />
        <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
          <img src={hero_image} alt='' className='hero-image'/>
          <motion.img
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          src={hero_image_back} alt='' className='hero-image-back'/>
          <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:"28rem"}}
            transition={transition}
          className="calories">
            <img src={Calories} alt="" srcset="" />
            <div>
          <span>Calories burned</span>
          <span>220 Kcal</span>
            </div>
          </motion.div>
      </div>

    </div>
  );
}

export default Hero;
