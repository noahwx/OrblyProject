import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';
import UserDropdown from "./UserDropdown";

const Header = () => {
    return (
        <div className="Nav">
            <NavLink to="/" className='NavLogo'><img src={logo} alt='logo'/></NavLink>
            <div className="NavItems">
                <NavLink to="/" className='NavItem'>Feed</NavLink>
                <NavLink to="/notifications" className='NavItem'>Notifications</NavLink>
                <NavLink to="/messages" className='NavItem'>Messages</NavLink>
                <NavLink to="/account" className='NavItem'>Profile</NavLink>
            </div>
            <UserDropdown />
        </div>
    );
}

export default Header;