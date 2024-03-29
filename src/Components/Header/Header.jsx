import React, { useState } from 'react';
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [manuOpened, setManuOpened] = useState(false);
  return (
    <div className="header">
     <Link to='hero' span={true} smooth={true} > <img src={Logo} alt='' className='logo' /> </Link>
      {(manuOpened === false && mobile === true) ? (
        <div
        
        style={{backgroundColor:"var(--appColor)",padding:"0.5rem",borderRadius:"1rem"}}>
          
          <img src={Bars} alt="" srcset="" style={{ width: '3rem', height: '1.9rem'}} 
        
        onClick ={()=>setManuOpened(true)}/></div>
      ) :
        <ul className='header-menu'>
          <li>
            <Link
            onClick={()=>setManuOpened(false)}
            to='hero'
            span={true}
            smooth={true}
            >Home</Link></li>
          <li>
            <Link
            onClick={()=>setManuOpened(false)}
            to='programs'
            span={true}
            smooth={true}
            >Programs</Link>
            </li>
          <li onClick={()=>setManuOpened(false)}>
            <Link
            onClick={()=>setManuOpened(false)}
            to='reasons'
            span={true}
            smooth={true}
            >Why us</Link></li>
          <li onClick={()=>setManuOpened(false)}>
            <Link
            onClick={()=>setManuOpened(false)}
            to='plan'
            span={true}
            smooth={true}
            >Plan</Link>
            </li>
          <li onClick={()=>setManuOpened(false)}>
            <Link
            onClick={()=>setManuOpened(false)}
            to='testimonials'
            span={true}
            smooth={true}
           >Testimonials</Link></li>
        </ul>

      }
    </div>
  );
}

export default Header;
