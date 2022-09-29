import React, { useState } from 'react';
import './SideBar.css'
import Exercise from './SidebarProfile/Exercise/Exercise';
import SidebarProfile from './SidebarProfile/SidebarProfile';
import Timing from './Timing/Timing';

const SideBar = ({ timing }) => {

    let [breakTime, setBreakTime] = useState(0)

    const breakTimeHandle = (value) => {
        breakTime = value.target.innerText;
        setBreakTime(breakTime)
    }

    return (
        <div className='sidebar'>
            <SidebarProfile />
            <Timing breakTimeHandle={breakTimeHandle} />
            <Exercise timing={timing} breakTime={breakTime} />
        </div>
    );
};

export default SideBar;