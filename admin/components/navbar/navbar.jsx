// import React from 'react'
// import './navbar.css'
// import navlogo from '../../assets/logo.jpg'
// import navprofile from '../../assets/profile.png'
// import {useNavigate} from 'react-router-dom'
//  const Navbar = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div className='navbar'>
//         <img src={navlogo} alt="" className='nav-logo' />
//         <img src={navprofile} onClick={()=>navigate('/register')} className='nav-profile' alt=""/>  
//     </div>
//   )
// }
// export default Navbar;
import React from 'react';
import './navbar.css';
import navlogo from '../../assets/logo.jpg';
import navprofile from '../../assets/profile.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  
    return (
        <div className='navbar'>
            <img src={navlogo} alt="Logo" className='nav-logo' />
            <img src={navprofile} onClick={() => navigate('/register')} className='nav-profile' alt="Profile" />  
        </div>
    );
}

export default Navbar;