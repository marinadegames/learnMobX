import counter from "../store/counter";
import React from "react";

export const Counter = () => {
    return (
        <div className='box'>
            <h2>Count: {counter.count}</h2>
            <button onClick={() => counter.increment()}>+</button>
            <button onClick={() => counter.decrement()}>-</button>
        </div>
    )
}