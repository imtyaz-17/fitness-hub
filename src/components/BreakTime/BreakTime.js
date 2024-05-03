import React, { useEffect, useState } from 'react';
import './BreakTime.css';
import { addToDb, getStoredTime } from '../../utilities/localDB';

const BreakTime = ({ breakTime, handleBreakTime }) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        handleBreakTime(breakTime);
        addToDb(breakTime);
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
