/*================== TOOLS ===============*/
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { SmoothProvider } from 'react-smooth-scrolling'
import { Button } from '@material-ui/core'

/*========== COMPONENT IMPORTS ===========*/
import Landing from './components/Landing'
import HeroArea from './components/HeroArea'
import CreateAccount from './components/CreateAccount'
import Home from './components/Home'
import Nav from './components/Nav'
import CreateCard from './components/CreateCard'
import EditCard from './components/EditCard'
import Footer from './components/Footer'

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
            <HeroArea />
            <Route path="/home" component={Home}/>
            <Route path="/landing" component={Landing} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/createcard" component={CreateCard} />
            <Route path="/editcard" component={EditCard} />
            <Footer />
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App
