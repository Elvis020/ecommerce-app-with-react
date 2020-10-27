import React from 'react';
import './SignIn_SignUp.scss';
import SignIn from '../../SignIn/SignIn';
import SignUp from '../../SignUp/SignUp';


function SignIn_SignUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignIn_SignUp
