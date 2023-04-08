import React from 'react';
import { PopupMenu } from "react-simple-widgets/dist/popup-menu";

const UserDropdown = () => {

    const handleLogout = () => {
        window.alert('Logged out');
    }

    return ( 
        <div className="user-dropdown-area">
            <PopupMenu>
                <button className="account-button">
                    <div className='account-image-btn-bg'>

                    </div>
                    <img src="https://images.unsplash.com/photo-1678538065976-7b9bfe8a3092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="user" />
                </button>
                {closePopup => (
                    <div id="options-menu" className="card">
                        <ul className="list-group">
                            <a href='/account'>
                                <button className="list-group-item"><span>Profile</span></button>
                            </a>
                            <a href='/auth/accountsettings'>
                                <button className="list-group-item"><span>Settings</span></button>
                            </a>
                            <button className="list-group-item" onClick={handleLogout}><span>Logout</span></button>
                            <button className="list-group-item" onClick={closePopup}><span>Close</span></button>
                        </ul>
                    </div>
                )}
            </PopupMenu>
        </div>
    );    
}
 
export default UserDropdown;    