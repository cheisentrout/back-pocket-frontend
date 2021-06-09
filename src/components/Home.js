/*===== TOOLS =====*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

/*===== FILES =====*/

import EditCard from './EditCard'

/*======== CUSTOM MATERIAL UI COMPONENT STYLES =========*/

const linkStyles = {
    textDecoration: 'none'
}

const CustomButton = styled(Button)
    `background-color: #C6D8FF;
    text-transform: none;
    &:hover {
        background-color: purple;
    }
`;

/*======================================================*/

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

    const [cards, setCards] = useState([])

    const getCards = (e) => {

        e.preventDefault()

        const usersCards = []
        const selTag = document.getElementById('sel-tag')
        const selUser = selTag.options[selTag.selectedIndex].value

        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards')
        .then(
            (response) => {
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].user == selUser) {
                        usersCards.push(response.data[i])
                    }
                }
                setCards(usersCards)
            }
        )
    }

    return (
        <div>
            <h1>Home (Profile) Component</h1>
            <Link to="/createaccount" style={linkStyles}>
                <CustomButton
                    variant="contained">
                    Add User
                </CustomButton>
            </Link>
            <Link to="/createcard" style={linkStyles}>
                <CustomButton
                    variant="contained">
                    Add Card
                </CustomButton>
            </Link>
            <section>
                <h3>Search for cards by user:</h3>
                <form onSubmit={getCards}>
                    <select id="sel-tag">
                        {availUsers.map(user => {
                            return (
                                <option id={user.id} value={user.id} className="user-selector">{user.username}</option>
                            )
                        })}
                    </select>
                    <input type="submit" value="Get Cards" />
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
