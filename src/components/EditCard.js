/*========= TOOLS =========*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function EditCard({card}) {

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

    const [state, setState] = useState(
        {
            user: '',
            title: '',
            card_text: '',
            card_img: '',
            cardPublic: false
        }
    )

    // const user = state.user
    const title = state.title
    const card_text = state.card_text
    const card_img = state.card_img
    // const cardPublic = state.cardPublic

    const updateCard = (e) => {
        e.preventDefault()
        axios
        .put(`https://tranquil-wildwood-78396.herokuapp.com/pocket/cards/${card.id}`, state)
        .then(
            (response) => {
                console.log(response);
            }
        )

    }

    const deleteCard = (e) => {
        axios
        .delete(`https://tranquil-wildwood-78396.herokuapp.com/pocket/cards/${card.id}`)
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
            <h1>Edit Card</h1>
            <h3></h3>
            <form onSubmit={updateCard}>

                <label>Author</label>
                <br />
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
                    <img src={card_img} alt={title} />
                    <p>{card_text}</p>
                </div>

                <input
                    type="submit"
                    value="Send Edits"
                />
            </form>
            <form onSubmit={deleteCard}>
                <input type="submit" value="Delete Card" />
            </form>
        </div>
    )
}

export default EditCard
