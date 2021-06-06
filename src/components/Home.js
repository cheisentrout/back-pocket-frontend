/*===== TOOLS =====*/
import axios from 'axios'
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'

/*===== FILES =====*/
import CreateCard from './CreateCard'
import CreateAccount from './CreateAccount'

function Home() {

    const [cards, setCards] = useState([])

    const getCards = () => {
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards')
        .then(
            (response) => {
                console.log(response.data); // This logs an array of 4 objects
                setCards(response.data)
                console.log("Cards array in state: " + cards); // "cards" logs nothing here
            }
        )
    }

    return (
        <div>
            <h1>Home (Profile) Component</h1>
            <Link to="/createaccount">Add User</Link>
            <Link to="/createcard">Add Card</Link>
            <section>
                <button onClick={getCards}>Load Cards</button>
                {cards.map(card => {
                    return (
                        <div className="card" id={card.id}>
                            <img src={card.card_img} alt={card.title} />
                            <p>{card.card_text}</p>
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
