import React from 'react';
import './AddBreak.css';
import BreakTime from '../BreakTime/BreakTime';
const AddBreak = ({ handleBreakTime }) => {
    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className='add-breaks-container'>
            <h3>Add A Break</h3>
            <div className='add-breaks'>
                {
                    breakTimes.map(breakTime => <BreakTime key={breakTime} breakTime={breakTime} handleBreakTime={handleBreakTime}></BreakTime>)
                }
            </div>

        </div>
    );
};

export default AddBreak;