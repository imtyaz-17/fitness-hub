import React, { useState } from 'react';
import './Aside.css';

import UserProfile from '../UserProfile/UserProfile';
import AddBreak from '../AddBreak/AddBreak';
import Timers from '../Timers/Timers';
import { addToDb, getStoredTime } from '../../utilities/localDB';
const Aside = ({ exerciseTime }) => {
    const retrievedTime = getStoredTime();
    const [breakTime, setBreakTime] = useState(retrievedTime);

    const handleBreakTime = bTime => {
        setBreakTime(bTime);
        addToDb(bTime);
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