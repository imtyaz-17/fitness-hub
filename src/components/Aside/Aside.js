import React from 'react';
import './Aside.css';

import UserProfile from '../UserProfile/UserProfile';
import AddBreak from '../AddBreak/AddBreak';
import Timers from '../Timers/Timers';
const Aside = () => {
    return (
        <div className='aside-container'>
            <UserProfile></UserProfile>
            <AddBreak></AddBreak>
            <Timers></Timers>
            <div className='completed'>
                <button className='completed-btn'>Activity Complete</button>
            </div>
        </div >
    );
};

export default Aside;