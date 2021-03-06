const initialState = {
    todos: [
    {
        id: 1,
        title: 'Work 1',
        completed: false
    },
    {
        id: 2,
        title: 'Work 2',
        completed: false
    },
    {
        id: 3,
        title: 'Work 3',
        completed: false
    },
    {
        id: 4,
        title: 'Work 4',
        completed: false
    },
    ],

}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MARK_COMPLETE':
            return {
                ...state,
                todos: state.todos.map( todo => {
                    if(todo.id === action.payload) todo.completed = !todo.completed
                    return todo;
                })
            }
         case 'ADD_TODO' :
             return {
                 ...state,
                 todos: [...state.todos, action.payload] 
             } 
         case 'DELETE_TODO':
             return {
                 ...state,
                 todos: state.todos.filter(todo => todo.id !== action.payload)
             }          
        default:
            return state;
    }
    
    }

export default todoReducer;