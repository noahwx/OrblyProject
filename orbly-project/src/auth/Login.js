import React, { useState } from "react";
import LoginInForm from "./LoginInForm";
import logo from '../logo.svg';
import SignUpForm from "./SignUpForm";

const Login = () => {

    const [showForm, setShowForm] = useState(false);

    const showSignUpForm = () => {
        setShowForm(!showForm);
    }

    return ( 
        <div className="Login">
            <img src={logo} alt="Orbly Logo" className="login-logo"/>
            {!showForm && (
                <LoginInForm showSignUpForm={showSignUpForm}/>
            )}
            {showForm && (
                <SignUpForm showSignUpForm={showSignUpForm}/>
            )}
            <div className="background-image">
                <img src="https://images.unsplash.com/photo-1676958361575-4086c41c127d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt='background'/>
            </div>
        </div>
     );
}
 
export default Login;