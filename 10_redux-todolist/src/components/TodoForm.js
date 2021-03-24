import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {addTodo} from '../store/actions/todoActions'
import {connect} from 'react-redux'

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4,
            title,
            completed: false
        }
        addTodo(newTodo)
        setTitle('')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name = 'title' value={title} onChange={onTitleChange}/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { addTodo })(TodoForm)