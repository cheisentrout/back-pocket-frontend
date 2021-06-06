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
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'

/*============= APP FUNCTION =============*/
function App() {

    const getCards = () => {
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards')
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
            <button onClick={getCards}>Get Cards</button>
            <Route path="/home" component={Home}/>
            <Route path="/landing" component={Landing} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/createcard" component={CreateCard} />
            <Route path="/editcard" component={EditCard} />
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App
