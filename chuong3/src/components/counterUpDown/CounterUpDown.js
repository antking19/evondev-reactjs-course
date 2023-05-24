import React, { useReducer, useState } from "react";

// useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// 1. Init state: 0
const initState = 0;

// 2.Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// 3. Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;

        default:
            throw new Error("Invalid action");
    }
};

const CounterUpDown = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => dispatch(UP_ACTION)}>Count Up</button>
                <button onClick={() => dispatch(DOWN_ACTION)}>
                    Count Down
                </button>
            </div>
        </div>
    );
};

export default CounterUpDown;
