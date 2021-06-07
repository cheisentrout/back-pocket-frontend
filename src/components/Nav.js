/*===== TOOLS =====*/
// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <nav>
            <h3>back pocket</h3>
            <ul className="nav-links">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/createcard">
                    <li>Create Card</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
