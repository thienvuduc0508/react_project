import React from 'react'
import TodoForm from './TodoForm'
import {connect} from 'react-redux'
import {markComplete, deleteTodo} from '../store/actions/todoActions'
import { v4 as uuidv4 } from 'uuid'


const Todos = ({todos, markComplete, deleteTodo}) => {
     
    return (
        <div className='todo-list'>
        <TodoForm />
            <ul>
                {todos.map((todo) => {
                    return (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>{todo.title}
                    <input type="checkbox" onChange={markComplete.bind(this, todo.id)}/>
                    <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
                    </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

// lay state bang ham connect
const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { markComplete, deleteTodo})(Todos)
