import React from 'react';
import './Timing.css'

const Timing = () => {
    return (
        <div className='timing'>
            <div className='break-timing'>
                <h2>Add A Break</h2>
                <div className="break-timing-count">
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                </div>
            </div>
        </div>
    );
};

export default Timing;