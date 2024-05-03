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
    return (
        <div className='main-container'>
            <div>
                <h1 className='header-title'>
                    <FontAwesomeIcon icon={faDumbbell} /> FITNESS HUB</h1>
                <h3>Choose your exercise plan</h3>
            </div>
            <div className='exercises-container'>
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;