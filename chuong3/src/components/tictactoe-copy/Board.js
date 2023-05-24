import { calculateWinner } from "../../helper";
import Cell from "./Cell";

const Board = (props) => {
    // const cells = [null, null, null, "X", "X", "X", null, null, null];
    // console.log(calculateWinner(cells));
    const { cells, onClick } = props;

    return (
        <div className="game-board">
            {cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => onClick(index)}
                    className={
                        item === "X" ? "is-x" : item === "O" ? "is-o" : ""
                    }
                ></Cell>
            ))}
        </div>
    );
};

export default Board;
