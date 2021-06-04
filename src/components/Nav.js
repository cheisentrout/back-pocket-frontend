/*===== TOOLS =====*/
// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h3>Here's the nav!</h3>
            <ul className="nav-links">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/library">
                    <li>Library</li>
                </Link>
                <Link to="/landing">
                    <li>Log Out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
