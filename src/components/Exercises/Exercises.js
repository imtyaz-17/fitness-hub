import React, { useEffect, useState } from 'react';
import './Exercises.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Exercise from '../Exercise/Exercise';
const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('dataBase.json')
            .then(resp => resp.json())
            .then(data => setExercises(data))
    }, [])

    // const handleAddToCart = () => {

    // }
    return (
        <div className='main-container'>
            <div className='left-container'>
                <h1 className='header-icon'>
                    <FontAwesomeIcon icon={faDumbbell} />FITNESS HUB</h1>
                <h2>Choose your exercise plan</h2>

                <div className='exercises-container'>
                    {
                        exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
                    }
                </div>
            </div>
            <div className='right-container'>
                <h2>aside </h2>
            </div>

        </div>
    );
};

export default Exercises;