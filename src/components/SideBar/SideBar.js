import React, { useEffect, useState } from 'react';
import './SideBar.css'
import Exercise from './SidebarProfile/Exercise/Exercise';
import SidebarProfile from './SidebarProfile/SidebarProfile';
import Timing from './Timing/Timing';

const SideBar = ({ timing }) => {

    let [breakTime, setBreakTime] = useState(0)

    const breakTimeHandle = (value) => {
        breakTime = value.target.innerText;
        setBreakTime(breakTime)

        localStorage.setItem('break time', breakTime)
    }

    useEffect(() => {
        const items = localStorage.getItem('break time', breakTime)
        if (items) {
            setBreakTime(items)
        }
    }, [breakTime])

    return (
        <div className='sidebar'>
            <SidebarProfile />
            <Timing breakTimeHandle={breakTimeHandle} />
            <Exercise timing={timing} breakTime={breakTime} />
        </div>
    );
};

export default SideBar;