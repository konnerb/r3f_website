import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';

const Header = () => (

    <header className="header">
      <NavLink className="header__link" to="/">R3F</NavLink>
      <div className="header__links">
        <NavLink className="header__link" activeClassName="selected" to="/nav/shop">Shop</NavLink>
        <NavLink className="header__link" activeClassName="selected" to="/nav/videos">Videos</NavLink>
        <NavLink className="header__link" activeClassName="selected" to="/nav/blog">Blog</NavLink>
        <NavLink className="header__link" activeClassName="selected" to="/nav/about-us">About Us</NavLink>
        <NavLink className="header__link" activeClassName="selected" to="/nav/contact">Contact</NavLink>
      </div>
    </header>

);

export default Header;