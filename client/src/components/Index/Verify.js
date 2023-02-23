import React from 'react'
import axios from 'axios'
import Userfront from "@userfront/react";

const Verify = ({setVerified}) => {
    Userfront.init("6bg6qz7n");

    const handleClick = () => {
        axios.get('http://localhost:443/authentication', {headers: {'x-auth-token': Userfront.tokens.accessToken }})
        .then((response) => {
            setVerified(response.data)
        })
        .catch((error) => {
            setVerified(error.response.data)
        })
    }

  return (
    <div>
        <button onClick={handleClick}>Verify Me!</button>
    </div>
  )
}

export default Verify