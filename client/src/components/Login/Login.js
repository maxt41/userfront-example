import React from 'react'
import {Link} from "react-router-dom";
import Userfront from "@userfront/react";
import './login.css'

const Login = () => {

    Userfront.init("6bg6qz7n");

    const LoginForm = Userfront.build({
        toolId: "orrlnar"
      });

    return (
        <div className='login_container'>
            <LoginForm />
            <h2 className='signup_link'><Link className='signup_link' to='/signup'>Sign Up Here!</Link></h2>
        </div>

    )
}

export default Login