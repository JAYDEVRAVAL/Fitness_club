import React from 'react';
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

const Reasons = () => {
    return (
        <div className='reasons' id='reasons'>
            <div className="left-r">
                <img src={image1} alt="" srcset="" />
                <img src={image2} alt="" srcset="" />
                <img src={image3} alt="" srcset="" />
                <img src={image4} alt="" srcset="" />
            </div>
            <div className="right-r">
                <span>Some reasons </span>
                <div>
                    <span className='stroke-text'>why? </span>
                    <span>choose us</span>
                </div>
                <div className='details-r'>
                    <div><img src={tick} alt=""></img><span>OVER 140+ COACHS</span></div>
                    <div><img src={tick} alt=""></img><span>TRAIN SMARTER AND FASTER THEN BEFORE</span></div>
                    <div><img src={tick} alt=""></img><span>1 FREE PROGRAMME FOR NEW MEMBER </span></div>
                    <div><img src={tick} alt=""></img><span>RELIABLE PARTNERS</span></div>
                </div>
                <span style={{ color: 'grey', fontWeight: 'normal' }}>OUR PARTNERS</span>
                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Reasons;
