import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css"
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).then()
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg" alt="WhatsApp img" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
