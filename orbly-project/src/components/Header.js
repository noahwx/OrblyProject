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
            <NavLink to="/account" className='NavAccount'>
                <div className="status-circle-profile"></div>
                <div className="profile-img">
                    <img src="https://images.unsplash.com/photo-1678538065976-7b9bfe8a3092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="profile-img"/>
                </div>
            </NavLink>
        </div>
    );
}

export default Header;