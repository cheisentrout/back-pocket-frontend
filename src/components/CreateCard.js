/*======== TOOLS ========*/
import axios from 'axios'
import React, { useState } from 'react'

function CreateCard() {

    const [newCard, setNewCard] = useState('')
    const [cardImg, setCardImg] = useState('')
    const [cardText, setCardText] = useState('')

    return (
        <div>
            <h1>Create Card Component</h1>
            <form>
                <label>Card Image</label>
                <br />
                <input
                    type="text"
                    onChange={e => setCardImg(e.target.value)}
                />
                <br />
                <label>Card Text</label>
                <br />
                <input
                    type="text"
                    onChange={e => setCardText(e.target.value)}
                />
            </form>
            <div className="card-preview">
                <img src={cardImg} alt="card-image" />
                <p>{cardText}</p>
            </div>
        </div>
    )
}

export default CreateCard
