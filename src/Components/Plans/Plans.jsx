import React from 'react';
import './Plan.css';
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
    return (
        <div className="plans-container">
                <div className='blur blur-plan-1'></div>
                <div className='blur blur-plan-2'></div>
            <div className="programs-header" style={{gap:'2rem',fontSize:'3rem'}}>
                <span className='stroke-text'>Ready to start </span>
                <span>your journey </span>
                <span className='stroke-text'>now with us </span>
            </div>
            {/* plans card */}
            <div className="plans" >
                {plansData.map((plan, i)=>(
                    <div className='plan' key={i}>{plan.icon}
                    <span>{plan.name}</span><span>${plan.price}</span>
                    <div className="features">
                        {plan.features.map((features ,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" srcset="" /><span key={i}>{features}</span>
                            </div>
                        ))}
                    </div>
                    <span>See  more details -> </span>
                    <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
