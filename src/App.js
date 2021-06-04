import axios from 'axios'
import React from 'react'

function App() {

    const getNotes = () => {
        axios
        .get('https://tranquil-wildwood-78396.herokuapp.com/pocket/notes')
        .then(
            (response) => {
                console.log(response.data);
            }
        )
    }

    return (
        <div>
            <h1>Back Pocket App</h1>
            <button onClick={getNotes}>Get Notes</button>
        </div>
    )
}

export default App

// class App extends React.Component {
//
//     render() {
//         return (
//             <div>
//                 <h1>Clare's React App!!!</h1>
//             </div>
//         )
//     }
// }
