import React from 'react';
import './Aside.css';

import UserProfile from '../UserProfile/UserProfile';
import AddBreak from '../AddBreak/AddBreak';
const Aside = () => {
    return (
        <div>
            <UserProfile></UserProfile>
            <AddBreak></AddBreak>
        </div>
    );
};

export default Aside;