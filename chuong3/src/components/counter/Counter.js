import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // Stale state
    const handleCount = () => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    };

    return (
        <div>
            <div onClick={handleCount}>Increment {count}</div>
        </div>
    );
};

export default Counter;
