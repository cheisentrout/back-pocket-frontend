/*======== TOOLS ========*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function CreateCard() {

    // const [cardAuthor, setCardAuthor] = useState('')
    // const [cardTitle, setCardTitle] = useState('')
    // const [cardText, setCardText] = useState('')
    // const [cardImg, setCardImg] = useState('')
    // const [cardVisibility, setCardVisibility] = useState(false)

    // Running into an issue where this axios call isn't complete before the component loads, so it initially thinks there ARE no available users -- look into useEffect for this? -- FIX: this was fixed by adding an array of one "dummy" object to briefly load before the axios call in useEffect could be completed
    const [availUsers, setAvailUsers] = useState([{
        id: null,
        username: ''
    }])

    // This queries the back end for user data as soon as the component loads, and sets the state of the component to include the db's response:
    useEffect(() => {
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/users')
        .then(
            (response) => {
                setAvailUsers(response.data)
            }
        )
    }, [])

    // My thought here was: if we have a newCard object who's state updates dynamically, we can set the keys to the form fields on the back end, and the values to the states that are being updated by each form field on the front end. Every time someone changes the cardTitle, ideally the newCard state would update as well...
    // const [newCard, setNewCard] = useState({
    //     user: cardAuthor,
    //     title: cardTitle,
    //     card_text: cardText,
    //     card_image: cardImg,
    //     public: cardVisibility
    // })

    const [state, setState] = useState(
        {
            user: '',
            title: '',
            card_text: '',
            card_img: '',
            cardPublic: false
        }
    )

    const user = state.user
    const title = state.title
    const card_text = state.card_text
    const card_img = state.card_img
    const cardPublic = state.cardPublic

    // WHERE I'M STUCK: how to take the full input of the form below and send it as a newCard object to the post route
    // In class components, we would use the form to update the entire state of a component, then pass this.state as an object to the post route.
    //
    const postNewCard = (e) => {
        e.preventDefault()
        console.log("Post new card fired");
        console.log(state);
        axios
        .post('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards', state)
        .then(
            (response) => {
                console.log(response);
            }
        )
    }

    function updateAuthor(e) {
        setState(prevState => {
            return {...prevState, user: e.target.value}
        })
    }

    function updateTitle(e) {
        setState(prevState => {
            return {...prevState, title: e.target.value}
        })
    }

    function updateImg(e) {
        setState(prevState => {
            return {...prevState, card_img: e.target.value}
        })
    }

    function updateText(e) {
        setState(prevState => {
            return {...prevState, card_text: e.target.value}
        })
    }

    function updateCardPublic(e) {
        setState(prevState => {
            return {...prevState, cardPublic: e.target.value}
        })
    }

    return (
        <div>
            <h1>Create Card Component</h1>
            <form onSubmit={postNewCard}>
                <label>Author</label>
                <br />
                {/*<select onChange={e => setCardAuthor(e.target.value)}>*/}
                <select onChange={updateAuthor}>
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
                    onChange={updateTitle}
                />
                <br />
                <label>Card Image</label>
                <br />
                <input
                    type="text"
                    onChange={updateImg}
                />
                <br />
                <label>Card Text</label>
                <br />
                <input
                    type="text"
                    onChange={updateText}
                />
                <br />
                <label>Public</label>
                <input
                    type="checkbox"
                    onChange={updateCardPublic}
                />
                <br />
                <div className="card-preview">
                    <img src={state.card_img} alt="card-image" />
                    <p>{state.card_text}</p>
                </div>
                <input
                    type="submit"
                    value="Create Card"
                />
            </form>

            {/*========== CREATE CARD FORM ===========*/}

            {/*<form onSubmit={postNewCard}>
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
            </form>*/}
        </div>
    )
}

export default CreateCard
