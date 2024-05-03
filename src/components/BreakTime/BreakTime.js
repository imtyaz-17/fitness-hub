import React, { useState } from 'react';
import './BreakTime.css';

const BreakTime = ({ breakTime, handleBreakTime }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        handleBreakTime(breakTime);
        setClicked(!clicked);
    };

    return (
        <div>
            <button onClick={handleClick} className={`btn ${clicked ? 'clicked' : ''}`}>
                <span>{breakTime}</span>s
            </button>
        </div>
    );
};

export default BreakTime;
