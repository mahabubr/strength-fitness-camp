import React from 'react';
import './SideBar.css'
import Exercise from './SidebarProfile/Exercise/Exercise';
import SidebarProfile from './SidebarProfile/SidebarProfile';
import Timing from './Timing/Timing';

const SideBar = ({timing}) => {

    return (
        <div className='sidebar'>
            <SidebarProfile />
            <Timing />
            <Exercise timing={timing}/>
        </div>
    );
};

export default SideBar;