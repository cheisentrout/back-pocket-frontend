// import the hooks you need in destructured format when you import React
import React, { useState } from 'react'

function App() {
    // first value is the state property we're dynamically updating
    // second value is the function we use to update that state property
    // const [count, setCount] = useState(4)
    // Commented out the above because, as is, every time the comonent renders, the useState function would update to 4. If we enclose the initial state inside a function, it will only run once when loaded:

    const [count, setCount] = useState(() => {
        return 4
    })

    // this function will call back to the state setting function (setCount) and, passed as an argument to setCount, will affect the state of the count property -- you enclose the state setting function within a more specific, parent function, that tells you how to affect the state of count (in this case, decrement)
    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default App

/*=========== HOOKS NOTES! ===========*/

/*

1. Hooks must run in the same order every time your component loads. This has a couple of important implications:
    - You cannot use a hook inside of a conditional statement.
    - You cannot use a hook inside of another function.
    - They MUST live at the top level of your functional component.

2. useState() always returns an array with two values:
    - The first value is your current state. In this example, that would be "count", or whatever number you want your span value to begin at.
    - The second value is a function that allows you to update your current state. Here, called setCount.

*/
