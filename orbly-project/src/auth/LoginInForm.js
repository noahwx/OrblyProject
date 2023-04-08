import React from "react";

const LoginInForm = (props) => {
    return ( 
        <form className="login-form">
            <div className="form-contents">
                <h1>Log In</h1>
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id="username" placeholder="Enter your username..."/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password..."/>
                <button type="submit" className="login-btn">Log In</button>
                <button type="submit" className="register-btn" onClick={props.showSignUpForm}>Sign Up</button>
            </div>
        </form>
     );
}
 
export default LoginInForm;