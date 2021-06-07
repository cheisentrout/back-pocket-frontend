/*===== TOOLS =====*/
import axios from 'axios'
import React, { useState } from 'react'


function CreateAccount() {

    function postNewUser(e) {
        e.preventDefault()
        axios
        .post('https://tranquil-wildwood-78396.herokuapp.com/pocket/users', state)
        .then(
            (response) => {
                console.log(response.data);
            }
        )
    }

    const [state, setState] = useState(
        {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            profile_pic: ''
        }
    )

    // const first_name = state.first_name
    // const last_name = state.last_name
    // const username = state.username
    // const password = state.password
    // const profile_pic = state.profile_pic

    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={postNewUser}>
                <label>First Name</label>
                <br />
                <input
                    type="text"
                    onChange={e => setState(prevState => {
                        return {...prevState, first_name: e.target.value}
                    })}
                />
                <br />

                <label>Last Name</label>
                <br />
                <input
                    type="text"
                    onChange={e => setState(prevState => {
                        return {...prevState, last_name: e.target.value}
                    })}
                />
                <br />

                <label>username</label>
                <br />
                <input
                    type="text"
                    onChange={e => setState(prevState => {
                        return {...prevState, username: e.target.value}
                    })}
                />
                <br />

                <label>password</label>
                <br />
                <input
                    type="password"
                    onChange={e => setState(prevState => {
                        return {...prevState, password: e.target.value}
                    })}
                />
                <br />

                <label>Profile Picture</label>
                <br />
                <input
                    type="text"
                    onChange={e => setState(prevState => {
                        return {...prevState, profile_pic: e.target.value}
                    })}
                />
                <br />

                <input
                    type="submit"
                    value="Create Account"
                />

            </form>
        </div>
    )
}

export default CreateAccount
