import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import {Todolists} from "./components/Todolists";

// observer - функция, которая отслеживает перерисовку компоненты

export const App = observer(()  => {

  return (
    <div className="App">
        {/*<Counter/>*/}

        <h1>Todolists</h1>
        <Todolists/>
    </div>
  );
})

export default App;
