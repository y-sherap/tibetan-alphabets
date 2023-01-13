import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div id='nav-container'>
        {/* <div id='left-nav'>
            <Link to='/'>Home</Link>
        </div> */}
        <div id='right-nav'>
            <Link to='/info'>Info</Link>
        </div>
    </div>
  )
}

export default Nav