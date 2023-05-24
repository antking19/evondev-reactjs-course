import { useReducer, useState } from "react";
import { checkWinner1 } from "../../helper1";
import Board1 from "./Board1";
import "./Game1Style.css";

const initState = {
    boards: Array(9).fill(null),
    isXNext: false,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case "CLICK": {
            // console.log(state, action.payload);
            const { boards, isXNext } = state;
            const { index, winner } = action.payload;
            if (winner || boards[index]) return state;

            const nextState = JSON.parse(JSON.stringify(state));
            nextState.boards[index] = nextState.isXNext ? "O" : "X";
            nextState.isXNext = !isXNext;

            return nextState;
        }

        case "RESET_GAME": {
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.boards = Array(9).fill(null);
            nextState.isXNext = false;
            return nextState;
        }

        default:
            console.log("Error!!!");
            break;
    }
    return state;
};

const Game1 = () => {
    // const [boards, setBoards] = useState(Array(9).fill(null));
    // const [isXNext, setIsXNext] = useState(false);

    const [state, dispatch] = useReducer(gameReducer, initState);

    const winner = checkWinner1(state.boards);

    const handleClick = (index) => {
        // const boardsCopy = [...state.boards];
        // if (winner || boardsCopy[index]) return;

        dispatch({
            type: "CLICK",
            payload: {
                index,
                winner,
            },
        });
        // boardsCopy[index] = isXNext ? "O" : "X";
        // setBoards(boardsCopy);
        // setIsXNext((isXNext) => !isXNext);
    };

    const handleResetGame = () => {
        // setBoards(Array(9).fill(null));
        // setIsXNext(false);
        dispatch({
            type: "RESET_GAME",
        });
    };

    return (
        <div className="game-container">
            <Board1 handleClick={handleClick} cells={state.boards}></Board1>
            {winner && <div className="winnerText">Winner is {winner}</div>}
            <button className="btnResetGame" onClick={handleResetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default Game1;
