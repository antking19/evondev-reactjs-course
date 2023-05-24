const Cell1 = ({ value, handleClick, className }) => {
    return (
        <div className={`game-cell1 ${className}`} onClick={handleClick}>
            {value}
        </div>
    );
};

export default Cell1;
