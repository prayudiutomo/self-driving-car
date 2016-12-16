import React, { Component } from 'react';
import Logo from '../Assets/Images/grab-logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
          <img src={Logo} className="Header-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
