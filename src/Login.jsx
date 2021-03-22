import React from 'react';
import logo from './img/logo-on-dark.svg';
import google from './img/google-icon.svg';

function Login() {
    return (
        <div className="App login">
            <img
            className="login__logo" 
            src={logo} 
            alt="meet up logo"/>
            <h1>Welcome to the Meet Up App</h1>
            <h4>Login to see upcoming events around the world for full-stack developers</h4>
            <div className="google-button">
                <img 
                    className="google-icon"
                    src={google}
                    alt="google sign-in" />
                <a 
                    href="https://hymncvcewd.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
                    rel="nofollow noopener">Sign In with Google
                </a>
            </div>
            <a href="https://deveke.github.io/meet-app/privacy.html"
                rel="nofollow noopener">
                Privacy Policy
            </a>
        </div>
    )
}

export default Login;