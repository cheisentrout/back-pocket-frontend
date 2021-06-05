/*================== TOOLS ===============*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/*========== COMPONENT IMPORTS ===========*/
import Landing from './components/Landing'
import CreateAccount from './components/CreateAccount'
import Home from './components/Home'
import Library from './components/Library'
import Nav from './components/Nav'
import AddNote from './components/AddNote'

/*============= APP FUNCTION =============*/
function App() {

    const getNotes = () => {
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/notes')
        .then(
            (response) => {
                console.log(response.data);
            }
        )
    }

    return (
        <Router>
            <Nav />
            <h1>Back Pocket App</h1>
            <button onClick={getNotes}>Get Notes</button>
            <AddNote />
            <Route path="/landing" component={Landing} />
            <Route path="/account" component={CreateAccount} />
            <Route path="/home" component={Home} />
            <Route path="/library" component={Library} />
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App
