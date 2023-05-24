import Cell1 from "./Cell1";

const Board1 = ({ cells, handleClick }) => {
    return (
        <div className="game-board1">
            {cells.map((item, index) => (
                <Cell1
                    key={index}
                    value={item}
                    className={item === "X" ? "isX" : item === "O" ? "isO" : ""}
                    handleClick={() => handleClick(index)}
                ></Cell1>
            ))}
        </div>
    );
};

export default Board1;
