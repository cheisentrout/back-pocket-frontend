/*======== TOOLS ========*/
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import {Button,
        FormGroup,
        InputLabel,
        Input,
        FormControl,
        FormHelperText,
        Select,
        Checkbox,
        TextareaAutosize,
        TextField} from '@material-ui/core'

/*====== CUSTOM COMPONENT STYLES ======*/

const btnStyles = {
    textTransform: 'none',
    backgroundColor: '#ECE6F0',
    padding: '0px 5px',
    borderRadius: '10px',
    margin: '20px auto'
}

/*======================================*/

function CreateCard() {

    const history = useHistory()

    const [availUsers, setAvailUsers] = useState([{
        id: null,
        username: 'select'
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

    // Add a form here that asks you to identify yourself as the current user, set the state of the component to have a currentUser, then automatically set that state to occupy the author field

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
        if (author === "" || title === "" || card_text === "" || card_img === "" ) {
            alert('Please complete every form field to create your card!')
        }
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
            <h1>create</h1>
            <p>Add text and images to generate your personal coping card.</p>
            <div  id="create-container">
                <form onSubmit={postNewCard}>

                <br />
                <Select name="user" onChange={updateForm} aria-describedby="author-text">
                    {availUsers.map(user => {
                        return (
                            <option value={user.id} key={user.id}>{user.username}</option>
                        )
                    })}
                </Select>
                <FormHelperText id="author-text">Author</FormHelperText>
                <br />

                <br />
                <Input
                    name="title"
                    onChange={updateForm}
                    aria-describedby="title-text"
                />
                <FormHelperText id="title-text">Title</FormHelperText>
                <br />

                <br />
                <Input
                    name="card_img"
                    onChange={updateForm}
                    aria-describedby="card_img-text"
                />
                <FormHelperText id="card_img-text">Image</FormHelperText>
                <br />

                <br />
                <TextField
                    name="card_text"
                    onChange={updateForm}
                    aria-describedby="card_text"
                />
                <FormHelperText id="card_text">Notes</FormHelperText>
                <br />

                <Checkbox
                    name="cardPublic"
                    onChange={updateForm}
                    style={{ color: 'purple' }}
                    aria-describedby="cardPublic"
                />
                <FormHelperText id="cardPublic">Make public?</FormHelperText>
                <br />

                <div className="card">
                    <img src={card_img} alt={title} className="animate__animated animate__fadeIn"/>
                    <p className="animate__animated animate__fadeIn">{card_text}</p>
                </div>

                <Input
                    type="submit"
                    value="Create Card"
                    style={btnStyles}
                />
                </form>
            </div>
        </div>
    )
}

export default CreateCard
