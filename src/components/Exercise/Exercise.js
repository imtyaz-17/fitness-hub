import React from 'react';
import './Exercise.css';
const Exercise = (props) => {
    const { image, name, description, age, time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={image} alt="" />
            <div className='exercise-info'>

                <h2 className='exercise-title'>{name}</h2>
                <p>{description}</p>
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