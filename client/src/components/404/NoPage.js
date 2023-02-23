import React from 'react'
import { Link } from 'react-router-dom'
import './nopage.css'

const NoPage = () => {
  return (
    <div>
        <h2><Link className='nopage_link' to='/dashboard'>Dashboard</Link></h2>
    </div>
  )
}

export default NoPage