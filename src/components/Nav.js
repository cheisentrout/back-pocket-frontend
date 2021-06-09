/*===== TOOLS =====*/
// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

/*======== CUSTOM MATERIAL UI COMPONENT STYLES =========*/

const linkStyles = {
    textDecoration: 'none',
    transition: '.3s'
}

/*======================================================*/

function Nav() {

    return (
        <nav>
            <h3>back pocket</h3>
            <ul className="nav-links">
                <Link to="/home" style={linkStyles}>
                    <li>Home</li>
                </Link>
                <Link to="/createcard" style={linkStyles}>
                    <li>Create Card</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
