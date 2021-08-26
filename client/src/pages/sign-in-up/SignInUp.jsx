import React from 'react'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signup/Signup'
import './signInUp.scss'

const SignInUp = () => {

    return (
        <div className="sign-in-up">
            <SignIn />
            <SignUp />
        </div>
    )
}


export default SignInUp