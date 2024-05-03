import React from 'react';
import './Exercise.css';
const Exercise = (props) => {
    const { image, name, description, age, time } = props.exercise;
    const stringSlicer = (str) => {
        if (str.length > 100) {
            return (str.slice(0, 100) + '...')
        }
        return str;
    }
    const exerciseDescription = stringSlicer(description);
    return (
        <div className='exercise'>
            <div className='exercise-info'>
                <img src={image} alt="" />
                <h2 className='exercise-title'>{name}</h2>
                <p className='exercise-desc'>{exerciseDescription}</p>
                <p className='age'>For Age: <strong>{age}</strong></p>
                <p className='time-required'>Time Required: <strong>{time}s</strong></p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
        </div>
    );
};

export default Exercise;