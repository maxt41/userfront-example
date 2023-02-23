import React, { useState } from 'react'
import Userfront from "@userfront/react";
import './index.css'
import Verify from './Verify';

const Index = () => {
    const [verify, setVerify] = useState([])

    Userfront.init("6bg6qz7n");

    return (
        <div className='index_container'>
            <h1>Hello, {Userfront.user.name}</h1>
            <h3>{Userfront.user.hasRole('admin') ? 'You are an Admin' : null}</h3>
            <p>Account created: {Userfront.user.createdAt}</p>
            <p>{(verify) ? verify : null}</p>
            <Verify setVerified={setVerify}/><br />
            <button className='index_logout' onClick={Userfront.logout}>Logout</button>
            
        </div>
    )
}

export default Index