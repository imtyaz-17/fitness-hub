import React, { useState } from 'react';
import './Aside.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const notify = () => toast.success('Congratulations 🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div className='aside-container'>
            <UserProfile></UserProfile>
            <AddBreak handleBreakTime={handleBreakTime}></AddBreak>
            <Timers exerciseTime={exerciseTime} breakTime={breakTime}></Timers>
            <div className='completed'>
                <button className='completed-btn' onClick={notify}>Activity Complete</button>
                <ToastContainer />
            </div>
        </div >
    );
};

export default Aside;