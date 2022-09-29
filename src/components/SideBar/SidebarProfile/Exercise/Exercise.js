import React from 'react';
import './Exercise.css'

const Exercise = ({timing, breakTime}) => {

    return (
        <div className='exercise-container'>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <div className="exercise-content">
                    <h3>Exercise time</h3>
                    <p>{timing} seconds</p>
                </div>
                <div className="exercise-content">
                    <h3>Break time</h3>
                    <p>{breakTime} seconds</p>
                </div>
            </div>
            <button className='exercise-btn'>Activity Completed</button>
        </div>
    );
};

export default Exercise;