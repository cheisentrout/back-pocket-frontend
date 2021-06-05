import React, { useState } from 'react'

function AddNote(props) {

    const [noteText, setNoteText] = useState()
    const [user, setUser] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        // more here
    }

    return (
        <form
            onSubmit={e => {handleSubmit(e)}}>
            <label>Note Text</label>
            <br />
            <input
                name="note_text"
                type="text"
                onChange={e => setNoteText(e.target.value)}
                value={noteText}
            />
            <br />
            <label>User</label>
            <br />
            <input
                name="user"
                type="text"
                onChange={e => setUser(e.target.value)}
                value={user}
            />
            <br />
            <input
                type="submit"
                value="Add Note"
            />
        </form>
    )

}

export default AddNote
