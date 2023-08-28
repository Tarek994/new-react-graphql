import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "./nav-assets/logo.png";

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className='navbar'>
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/about">
            <button className="btn">ABOUT</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
