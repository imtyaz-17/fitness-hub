import React from 'react';
import './Timers.css';

const Timers = () => {
    return (
        <div className='timer'>
            <h3>Required Times</h3>
            <div className='time'>
                <p>Exercise time</p><span>200 seconds</span>
            </div>
            <div className='time'>
                <p>Break time</p><span>10 seconds</span>
            </div>
        </div>
    );
};

export default Timers;