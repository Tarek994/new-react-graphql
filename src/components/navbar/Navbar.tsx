import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "./nav-assets/logo.png";
import Grid from '@mui/material/Unstable_Grid2';

const Navbar = () => {
  return (
    <Grid xs={12}>
      <nav className="main-navbar" style={{ backgroundColor: 'red' }}>
        <div className='navbar'>
          <div className="navbar-left">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <div className="navbar-right">
            <Link to="/about">
              <button className="btn">About</button>
            </Link>
          </div>
        </div>
      </nav>
    </Grid>

  );
};

export default Navbar;
