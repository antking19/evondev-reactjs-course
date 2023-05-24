import { useState } from "react";
import "./ToggleStyle.css";

const Toggle = (props) => {
    const [on, setOn] = useState(false);

    const handleToggle = () => {
        setOn((on) => !on);
    };

    return (
        <div>
            <div
                className={`toggle ${on ? "active" : ""}`}
                onClick={handleToggle}
            >
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
            {/* {on ? "On" : "Off"}
            <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>
                    On
                </div>
                <div className="toggle-off" onClick={() => setOn(false)}>
                    Off
                </div>
            </div> */}
        </div>
    );
};
export default Toggle;
