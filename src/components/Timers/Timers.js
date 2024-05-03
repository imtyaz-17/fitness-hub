import React from 'react';
import './Timers.css';

const Timers = ({ exerciseTime, breakTime }) => {
    return (
        <div className='timer'>
            <h3>Required Times</h3>
            <div className='time'>
                <p>Exercise time</p><span>{exerciseTime} seconds</span>
            </div>
            <div className='time'>
                <p>Break time</p><span>{breakTime} seconds</span>
            </div>
        </div>
    );
};

export default Timers;