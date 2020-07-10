import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.scss'

const Header = ()=> {
    return (
     <header className="header">
         <div className="header__logo-container">
             <NavLink to='/' className="header__link">
                <h1 className="header__logo">LOGO HERE</h1>
             </NavLink>
         </div>
         <div className="header__link-container">
             <NavLink to='/about' className="header__link">
                 <p className="header__link">ABOUT</p>
             </NavLink>
             <NavLink to='/features' className="header__link">
                 <p>FEATURES</p>
             </NavLink>
             <NavLink to='/pricing' className="header__link">
                 <p>PRICING</p>
             </NavLink>
         </div>
     </header>   
    )
}

export default Header;