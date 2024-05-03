import React, { useState } from 'react';
import './Aside.css';

import UserProfile from '../UserProfile/UserProfile';
import AddBreak from '../AddBreak/AddBreak';
import Timers from '../Timers/Timers';
const Aside = ({ exerciseTime }) => {
    const [breakTime, setBreakTime] = useState(0);

    const handleBreakTime = bTime => {
        setBreakTime(bTime);
    }
    return (
        <div className='aside-container'>
            <UserProfile></UserProfile>
            <AddBreak handleBreakTime={handleBreakTime}></AddBreak>
            <Timers exerciseTime={exerciseTime} breakTime={breakTime}></Timers>
            <div className='completed'>
                <button className='completed-btn'>Activity Complete</button>
            </div>
        </div >
    );
};

export default Aside;