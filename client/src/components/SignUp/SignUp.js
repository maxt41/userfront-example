import React from 'react'
import {Link} from "react-router-dom";
import Userfront from "@userfront/react";
import './signup.css'

const SignUp = () => {

    Userfront.init("6bg6qz7n");

    const SignupForm = Userfront.build({
        toolId: "baadkab"
      });

    return (
        <div className='signup_container'>
            <SignupForm />
            <h2 className='login_link'><Link className='login_link' to='/login'>Login Here!</Link></h2>
        </div>
    )      
}

export default SignUp