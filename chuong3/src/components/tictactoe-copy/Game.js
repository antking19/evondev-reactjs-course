import { calculateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";
import { useReducer, useState } from "react";

const initialState = {
    boards: Array(9).fill(null),
    xIsNext: false,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case "CLICK":
            console.log("it working...");
            break;
        default:
            break;
    }
    return state;
};

const Game = () => {
    // const [boards, setBoards] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(false);
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const winner = calculateWinner(state.boards);

    const handleClick = (index) => {
        console.log(index);
        const boardsCopy = [...state.boards];
        if (winner || boardsCopy[index]) return;
        dispatch({
            type: "CLICK",
            payload: { index },
        });

        // boardsCopy[index] = xIsNext ? "O" : "X";
        // setBoards(boardsCopy);
        // setXIsNext((xIsNext) => !xIsNext);
    };

    const handleResetGame = () => {
        // setBoards(Array(9).fill(null));
        // setXIsNext(false);
    };

    return (
        <div>
            <Board cells={state.boards} onClick={handleClick}></Board>
            {winner && (
                <div className="showWinnerPlayer">Winner is {winner}</div>
            )}

            <button className="resetButton" onClick={handleResetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default Game;
