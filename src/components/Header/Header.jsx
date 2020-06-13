import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';

const Header = () => (

  <header className="header">
    <NavLink className="header__link" to="/">R3F</NavLink>
    <div className="header__links">
    <a className="header__link" href="https://github.com/react-spring/react-three-fiber" rel="noopener noreferrer" target="_blank">Github<span>&#10132;</span></a>
    <a className="header__link" href="https://twitter.com/0xca0a" rel="noopener noreferrer" target="_blank">Twitter<span>&#10132;</span></a>
    <a></a>
    </div>
  </header>

);

export default Header;