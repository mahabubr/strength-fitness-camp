import React from 'react';
import './SideBar.css'
import Exercise from './SidebarProfile/Exercise/Exercise';
import SidebarProfile from './SidebarProfile/SidebarProfile';
import Timing from './Timing/Timing';

const SideBar = ({addToList}) => {
    return (
        <div className='sidebar'>
            <SidebarProfile />
            <Timing />
            <Exercise addToList={addToList} />
        </div>
    );
};

export default SideBar;