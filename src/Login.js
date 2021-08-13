import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src="" alt="" />
                <div className="login__text">
                    <h1>Sign in to whatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
