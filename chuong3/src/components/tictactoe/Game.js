import { calculateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";
import { useState } from "react";

const Game = () => {
    const [boards, setBoards] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(false);
    const winner = calculateWinner(boards);

    const handleClick = (index) => {
        const boardsCopy = [...boards];
        if (winner || boardsCopy[index]) return;
        boardsCopy[index] = xIsNext ? "O" : "X";
        setBoards(boardsCopy);
        setXIsNext((xIsNext) => !xIsNext);
    };

    const handleResetGame = () => {
        setBoards(Array(9).fill(null));
        setXIsNext(false);
    };

    return (
        <div>
            <Board cells={boards} onClick={handleClick}></Board>
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
