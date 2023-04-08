import React from "react";

const SignUpForm = (props) => {
    return ( 
        <form className="login-form">
            <div className="form-contents">
                <h1>Sign Up</h1>
                <label htmlFor="name">Name</label>
                <input type="name" name="name" id="name" placeholder="Enter your name..."/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email..."/>
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id="username" placeholder="Enter your username..."/>
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"/> 
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password..."/>
                <button type="submit" className="login-btn">Sign Up</button>
                <button type="submit" className="register-btn" onClick={props.showSignUpForm}>Log In</button>
            </div>
        </form>
    );
}
 
export default SignUpForm;