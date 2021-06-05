/*===== TOOLS =====*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Landing() {

    const [user, setUser] = useState('')

    const logInUser = (e) => {
        e.preventDefault()
        console.log('User state: ' + user)
        setUser(prevUser => e.target.value)
        // if (user === 'clare') {
        //     console.log("I should render all Clare's cards");
        // } else {
        //     console.log('This user is not Clare');
        // }
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/users')
        .then(
            (response) => {
                console.log(response.data);
                for (let i = 0; i < response.data.length; i++) {
                    console.log("Response data " + i + ": " + response.data[i].username);
                    if (user === response.data[i].username) {
                        console.log('This user was successfully logged in');
                        return
                    } else {
                        console.log('This user does not have an account');
                    }
                }
            }
        )
    }

    return (
        <div>
            <h1>Landing Page Component</h1>
            <p>Current user: {user}</p>
            <form onSubmit={logInUser}>
                <input
                    type="text"
                    placeholder="username"
                    value={user}
                    onChange={e => setUser(e.target.value)}/>
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
