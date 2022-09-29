import React from 'react';
import './Timing.css'

const Timing = ({breakTimeHandle}) => {
    return (
        <div className='timing'>
            <div className='break-timing'>
                <h2>Add A Break</h2>
                <div className="break-timing-count">
                    <div className='break-time-btn'>
                    <button onClick={(e) => breakTimeHandle(e)}>10</button>
                    <span>s</span>
                    </div>
                    <div className='break-time-btn'>
                    <button onClick={(e) => breakTimeHandle(e)}>20</button>
                    <span>s</span>
                    </div>
                    <div className='break-time-btn'>
                    <button onClick={(e) => breakTimeHandle(e)}>30</button>
                    <span>s</span>
                    </div>
                    <div className='break-time-btn'>
                    <button onClick={(e) => breakTimeHandle(e)}>40</button>
                    <span>s</span>
                    </div>
                    <div className='break-time-btn'>
                    <button onClick={(e) => breakTimeHandle(e)}>50</button>
                    <span>s</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timing;