/*===== TOOLS =====*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Select, Input, Modal } from '@material-ui/core'
import styled from 'styled-components'

/*===== FILES =====*/

import EditCard from './EditCard'

/*======== CUSTOM MATERIAL UI COMPONENT STYLES =========*/

const linkStyles = {
    textDecoration: 'none',
}

const btnStyles = {
    textTransform: 'none',
    backgroundColor: 'purple'
}

/*======================================================*/
/*=================== MAIN COMPONENT ===================*/

function Home() {

    const [availUsers, setAvailUsers] = useState([{
        id: null,
        username: ''
    }])

    useEffect(() => {
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/users')
        .then(
            (response) => {
                setAvailUsers(response.data)
            }
        )
    }, [])

    const [selUser, setSelUser] = useState('')

    const updateSelUser = (e) => {
        setSelUser(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const [cards, setCards] = useState([])

    const getCards = (e) => {

        e.preventDefault()
        const usersCards = []
        // const selTag = document.getElementById('sel-tag') // just set <select></select> back to reg tag
        // const selTag = document.querySelector('Select')
        // const selUser = selTag.options[selTag.selectedIndex].value

        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards')
        .then(
            (response) => {
                console.log(response.data);
                console.log(selUser);
                console.log(selUser.selUser);
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].user == selUser.selUser) {
                        console.log(response.data[i]);
                        usersCards.push(response.data[i])
                    }
                }
                setCards(usersCards)
            }
        )
    }

    return (
        <div id="home-container">
            <h1>gallery</h1>
            <Link to="/createaccount" style={{linkStyles}}>
                <Button
                    style={{ backgroundColor: 'purple', color: 'white', textTransform: 'none' }}
                    variant="contained">
                    Add User
                </Button>
            </Link>
            <Link to="/createcard" style={linkStyles}>
                <Button
                    style={{ backgroundColor: 'purple', color: 'white', textTransform: 'none' }}
                    variant="contained">
                    Add Card
                </Button>
            </Link>
            <section>
                <h3>Search for cards by user:</h3>
                <form onSubmit={getCards}>
                    <Select
                        id="sel-tag"
                        name="selUser"
                        onChange={updateSelUser}>
                        {availUsers.map(user => {
                            return (
                                <option id={user.id} value={user.id} className="user-selector">{user.username}</option>
                            )
                        })}
                    </Select>
                    <Input
                        type="submit"
                        value="Get Cards"
                    />
                </form>
                {cards.map((card) => {
                    return (
                        <div id={card.id}>
                            <div className="card" id={card.id}>
                                <img src={card.card_img} alt={card.title} />
                                <p>{card.card_text}</p>
                            </div>
                                <details>
                                <summary>Edit Card</summary>
                                    <EditCard
                                        card={card}
                                    />
                                </details>
                            {/* HOW can I get each rendered card to have a link to the EditCard component, and when the EditCard component renders, it has access to this specific card? */}
                            <Link to="/editcard" card={card}>Edit Card Link</Link>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

/*=============================================================
=================== CLASS COMPONENT VERSION =================*/

// class Home extends React.Component {
//
//     state = {
//         cards: []
//     }
//
//     getCards = () => {
//         axios
//         .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards')
//         .then(
//             (response) => {
//                 console.log(response.data);
//                 this.setState(
//                     {
//                         cards: response.data
//                     }
//                 )
//             }
//         )
//     }
//
//     componentDidMount = () => {
//         this.getCards()
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Home (Profile) Component</h1>
//                 <Link to="/createaccount">Add User</Link>
//                 <Link to="/createcard">Add Card</Link>
//                 <section>
//                     <button onClick={this.getCards}>Load Cards</button>
//                     {this.state.cards.map(card => {
//                         return (
//                             <div className="card" id={card.id}>
//                                 <img src={card.card_img} alt={card.title} />
//                                 <p>{card.card_text}</p>
//                             </div>
//                         )
//                     })}
//                 </section>
//             </div>
//         )
//     }
// }

export default Home
