import React from 'react';
import './SideBar.css'
import SidebarProfile from './SidebarProfile/SidebarProfile';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <SidebarProfile />
        </div>
    );
};

export default SideBar;