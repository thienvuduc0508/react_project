import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    // lay state bang useSelector
    const todos = useSelector(state => state.todoReducer.todos)
    const length = todos.length
    return (
        <div className='navbar'>
            <h1>Todo App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos : {length}</li>
            </ul>
        </div>
    )
}

export default Navbar
