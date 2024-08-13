import React from "react";
import Logo from "../Images/logo.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className ="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter   />
          <SiLinkedin   />
          <BsYoutube   />
          <FaFacebookF   />
        </div>
      </div>
      
        <div className="footer-section-columns" style={{display : "flex" , flexDirection : "column"}}>
          <span>Quality   </span>
          <span>Help  </span>
          <span>Share   </span>
          <span>Careers  </span>
          <span>Testimonials  </span>
          <span>Work  </span>
        </div>
        <div className="footer-section-columns"style={{display : "flex" , flexDirection : "column",overflow : "right",}}>
          <span>244-5333-7783</span>
          <span>bake@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns"style={{display : "flex" , flexDirection : "column",}}>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      
    </div>
  );
};

export default Footer;