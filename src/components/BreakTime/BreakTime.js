import React from 'react';
import './BreakTime.css';
const BreakTime = ({ breakTime }) => {
    return (
        <div>
            <button onClick={() => BreakTime(breakTime)} className='btn'><span>{breakTime}</span>s</button>
        </div>
    );
};

export default BreakTime;