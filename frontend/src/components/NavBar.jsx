import React, { useState } from 'react';
import './../styles/NavBar.css';
import logo from "../assets/logo-no-background.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        
        <div className="login">
          <button>Login</button>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;