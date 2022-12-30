import React from 'react';
import './App.css';
import counter from './store/counter'
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

// observer - функция, которая отслеживает перерисовку компоненты

export const App = observer(()  => {

  return (
    <div className="App">
        <div className='box'>
            <h2>Count: {counter.count}</h2>
            <button onClick={() => counter.increment()}>+</button>
            <button onClick={() => counter.decrement()}>-</button>
        </div>

        <button onClick={() => todo.addTodo()}>add new todo</button>

        {todo.todos.map(t => {
            return (
                <div key={t.id} className='box' style={{background: t.isDone ? 'green' : 'none'}}>
                    <h2>{t.title}</h2>
                    <button onClick={() => todo.deleteTodo(t.id)}>delete</button>
                    <input onChange={() => todo.completeTodo(t.id)} type={"checkbox"} checked={t.isDone}/>
                </div>
            )
        })}
    </div>
  );
})

export default App;
