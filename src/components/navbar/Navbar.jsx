import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiloseLine } from 'react-dom';
import logo from '../../assets/laa-logo.png';
import profile from '../../assets/user.svg';
import menu from '../../assets/menu.svg';

const Navbar = () => {
  return (
    <div className="laa__navbar">
        <div className="laa__navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="laa__profile">
          <img src={menu} alt="logo" />
          <img src={profile} alt="logo" />
        </div>
    </div>
  )
}

export default Navbar