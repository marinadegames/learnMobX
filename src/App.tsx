import React from 'react';
import './App.css';
import counter from './store/counter'
import {observer} from "mobx-react-lite";

// observer - функция, которая отслеживает перерисовку компоненты

export const App = observer(()  => {

  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>Count: {counter.count}</h2>

      <button onClick={() => counter.increment()}>+</button>
      <button onClick={() => counter.decrement()}>-</button>
    </div>
  );
})

export default App;
