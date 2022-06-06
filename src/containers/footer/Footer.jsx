import React from 'react';
import './footer.css';
import logo from '../../assets/laa-logo.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className="laa__footer">
      <div className="logo">
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>

      <div className="laa__company">
        <h3>COMPANY</h3>
        <ul>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Library Administrator</a></li>
        </ul>
      </div>

      <div className="laa__contact-us">
        <h3>CONTACT US</h3>
        <ul>
          <li><a href="tel: +2348069460795"><img src={phone} alt="logo" /> +2348069460795</a></li>
          <li><a href="mailto: info@libraryaidafrica.org"><img src={mail} alt="logo" /> info@libraryaidafrica.org</a></li>
        </ul>
      </div>

      <div className="laa__follow-us">
        <h3>FOLLOW US</h3>
        <ul>
          <li><a href="https://facebook.com" target="blank" title="Facebook"><img src={facebook} alt="logo" /></a></li>
          <li><a href="https://instagram.com" target="blank" title="Instagram"><img src={instagram} alt="logo" /></a></li>
          <li><a href="https://linkedin.com" target="blank" title="LinkedIn"><img src={linkedin} alt="logo" /></a></li>
          <li><a href="https://twitter.com" target="blank" title="Twitter"><img src={twitter} alt="logo" /></a></li>
        </ul>
      </div>

      <div className="copyright">
        <span>Copyright 2022 </span>
      </div>
      
          
      
    </div>
  )
}

export default Footer