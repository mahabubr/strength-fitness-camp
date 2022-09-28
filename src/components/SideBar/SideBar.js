import React from 'react';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-profile'>
                <img src="https://www.upwork.com/profile-portraits/c14G8XFK9OOmlN0EWO14fxi3Y8-vy73LCdxNSEcCG1TWZaCt1UePSCuTXOO4-SDxp-" alt="" />
                <div className='profile-info'>
                    <h3 className='profile-name'>Mahabubur Rahman</h3>
                    <p className='profile-location'>
                        <FontAwesomeIcon icon={faLocationArrow} />
                        <span className='location-info'>Bogra, Bangladesh</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;