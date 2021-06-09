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
            <img id="logo" src="../../img/bp_text_logo.png" alt="back pocket" />
            <ul className="nav-links">
                <Link to="/home" style={linkStyles}>
                    <li>home</li>
                </Link>
                <Link to="/createcard" style={linkStyles}>
                    <li>create</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
