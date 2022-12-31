import React, {useEffect} from "react";
import Todo from "../store/todo";
import {observer} from "mobx-react-lite";

export const Todolists = observer(() => {

    useEffect(() => {
            // Todo.fetchTodos()
    }, [])

    return (
        <div className='wrapperTodos'>
            {Todo.todos.map(todo => {
                return (
                    <div key={todo.id} className='box'
                         onClick={() => Todo.changeTodoStatus(todo.id)}
                         style={{backgroundColor: todo.completed ? 'greenyellow' : 'none'}}>
                            <small>{todo.title}</small>
                    </div>
                )
            })}
        </div>
    )
})