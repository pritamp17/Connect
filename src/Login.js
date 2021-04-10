import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {
    const signIn = () =>{
            // google login
            auth.signInWithPopup(provider)
            .catch((error)=> alert(error.message));
    }

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://i.imgur.com/EshvWOx.jpg" alt="discord logo" />

            </div>

            <Button onClick={signIn}>Sign In</Button>

        </div>
    )
}

export default Login
