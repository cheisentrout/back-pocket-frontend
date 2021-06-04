/*===== TOOLS =====*/
// import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Landing() {

    const [user, setUser] = useState('user')

    const logInUser = (event) => {
        event.preventDefault()
        // let usernameInput = document.getElementById('username')
        // console.log(usernameInput.value);
        // let enteredUser = usernameInput.value
        // setUser(prevUser => enteredUser)
        // console.log('User state: ' + user)
        setUser(prevUser => 'new user!')
    }

    return (
        <div>
            <h1>Landing Page Component</h1>
            <p>Current user: {user}</p>
            <form onSubmit={logInUser}>
                <input type="text" id="username" placeholder="username" />
                <input type="password" placeholder="password" />
                <input type="submit" value="log in" />
            </form>
        </div>
    )
}

export default Landing

// I want to use the user entered username to update the state of the component's user
// so on form submit, I store the value from the username input field
// then, I try to call the setUser() function with the parameter of the entered username
// currently, the user is not reflecting the information entered
