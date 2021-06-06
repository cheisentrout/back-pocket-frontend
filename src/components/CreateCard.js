/*======== TOOLS ========*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function CreateCard() {

    const [cardAuthor, setCardAuthor] = useState('')
    const [cardTitle, setCardTitle] = useState('')
    const [cardText, setCardText] = useState('')
    const [cardImg, setCardImg] = useState('')
    const [cardVisibility, setCardVisibility] = useState(false)

    // Running into an issue where this axios call isn't complete before the component loads, so it initially thinks there ARE no available users -- look into useEffect for this?
    const [availUsers, setAvailUsers] = useState([{
        id: null,
        username: ''
    }])

    useEffect(() => {
        console.log("This is the component mount");
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/users')
        .then(
            (response) => {
                setAvailUsers(response.data)
            }
        )
    }, [])

    console.log(availUsers);

    const [newCard, setNewCard] = useState({
        // Card model structure?
        user: cardAuthor,
        title: cardTitle,
        card_text: cardText,
        card_image: cardImg,
        public: cardVisibility
    })

    const postNewCard = (e, newCard) => {
        e.preventDefault()
        console.log("post new card");
        console.log("New card:" + newCard);
    }

    return (
        <div>
            <h1>Create Card Component</h1>
            <form>
                <label>Author</label>
                <br />
                {/* Uncomment when I've figured out how to run the axios call before page load: */}
                <select>
                    {availUsers.map(user => {
                        return (
                            <option value={user.id}>{user.username}</option>
                        )
                    })}
                </select>
                <br />
                <label>Title</label>
                <br />
                <input
                    type="text"
                    onChange={e => setCardTitle(e.target.value)}
                />
                <br />
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

            {/*========== CREATE CARD FORM ===========*/}
            <form onSubmit={postNewCard}>
                <input
                    type="hidden"
                    readOnly
                    value={cardImg}
                    name="card_img"
                />
                <input
                    type="hidden"
                    readOnly
                    value={cardText}
                    name="card_text"
                />
                <input
                    type="submit"
                    value="Create Card"
                />
            </form>
        </div>
    )
}

export default CreateCard

// <select>
//     {availUsers.map(user => {
//         return (
//             <option value={user.id}>{user.username}</option>
//         )
//     })}
// </select>
