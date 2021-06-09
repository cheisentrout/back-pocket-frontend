/*======== TOOLS ========*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { Button, FormGroup, InputLabel, Input, FormControl, FormHelperText, Select, Checkbox, TextareaAutosize} from '@material-ui/core'

function CreateCard() {

    const history = useHistory()
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

    const author = state.user
    const title = state.title
    const card_text = state.card_text
    const card_img = state.card_img
    const cardPublic = state.cardPublic

    const postNewCard = (e) => {
        e.preventDefault()
        axios
        .post('https://tranquil-wildwood-78396.herokuapp.com/pocket/cards', state)
        .then(
            (response) => {
                console.log(response);
                history.push('/home')
            }
        )
    }

    function updateForm(e) {
        setState(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return (
        <div>
            <h1>Create Card Component</h1>
            <p>Just writing a paragraph to try and get material ui to git.</p>
                <form onSubmit={postNewCard}>

                <InputLabel>Author</InputLabel>
                <br />
                <Select name="user" onChange={updateForm}>
                    {availUsers.map(user => {
                        return (
                            <option value={user.id} key={user.id}>{user.username}</option>
                        )
                    })}
                </Select>
                <br />

                <InputLabel>Title</InputLabel>
                <br />
                <Input
                    name="title"
                    onChange={updateForm}
                    aria-describedby="title-text"
                />
                <FormHelperText id="title-text">Title</FormHelperText>
                <br />

                <InputLabel>Card Image</InputLabel>
                <br />
                <Input
                    name="card_img"
                    onChange={updateForm}
                    aria-describedby="card_img-text"
                />
                <FormHelperText id="card_img-text">Image</FormHelperText>
                <br />

                <InputLabel>Card Text</InputLabel>
                <br />
                <TextareaAutosize
                    name="card_text"
                    onChange={updateForm}
                    aria-describedby="card_text"
                />
                <FormHelperText id="card_text">Notes</FormHelperText>
                <br />

                <InputLabel>Public</InputLabel>
                <Checkbox
                    name="cardPublic"
                    onChange={updateForm}
                    aria-describedby="cardPublic"
                />
                <FormHelperText id="cardPublic">Make public?</FormHelperText>
                <br />

                <div className="card-preview">
                    <img src={card_img} alt={title} />
                    <p>{card_text}</p>
                </div>

                <Input
                    type="submit"
                    value="Create Card"
                />
                </form>
        </div>
    )
}

// export default withRouter(CreateCard)
export default CreateCard
