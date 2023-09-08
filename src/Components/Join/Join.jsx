import React,{ useRef } from 'react';
import './Join.css';


const Join = () => {
    
    const form = useRef()
   
    
    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span> LEVEL UP </span>
                </div>
                <div>
                    <span> YOUR BODY </span>
                    <span className='stroke-text'> WITH US? </span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className='email-container' >
                <input type="email" name="user_email" placeholder='Enter your email' />
                
                    <button className='btn btn-j' type='submit' ><a href="mailto:m.bluth@example.com">Join now</a></button>
                </form>
            </div>
        </div>
    );
}

export default Join;

// e.preventDefault();

// emailjs.sendForm('service_vonka5a', 'template_9ezpzec', form.current, 'HfWUanby0er17_SS0')
//   .then((result) => {
//       console.log(result.text);
//   }, (error) => {
//       console.log(error.text);
//   });