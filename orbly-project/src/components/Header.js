import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

const Header = () => {
    return (
        <div className="Nav">
            <NavLink to="/" className='NavLogo'><img src={logo} alt='logo'/></NavLink>
            <div className="NavItems">
                <NavLink to="/" className='NavItem'>Home</NavLink>
                <NavLink to="/about" className='NavItem'>About</NavLink>
                <NavLink to="/support" className='NavItem'>Support</NavLink>
                <NavLink to="/login" className='NavItem'>Login</NavLink>
            </div>
        </div>
    );
}

export default Header;