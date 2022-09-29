import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideBar from '../SideBar/SideBar';
import './Home.css'

const Home = () => {

    const [infos, setInfos] = useState([])
    const [timing, setTiming] = useState(0)

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])

    const addToList = (info) => {
        setTiming(timing + info.time)

        localStorage.setItem("time", parseInt(timing + info.time))
    }

    useEffect(() => {
        const time = parseInt(localStorage.getItem('time'))
        if (time) {
            setTiming(time)
        }
    }, [])

    return (
        <div className='main-container'>
            <div className='card-container'>
                <div className='header-title'>
                    <img src="https://image.similarpng.com/very-thumbnail/2020/12/Bodybuilding-and-gym-logo-on-transparent-background-PNG.png" alt="" />
                    <h2 className='side-title'>Strength And Fitness Camp</h2>
                </div>
                <h2 className='title-slogan'>Select today’s exercise</h2>
                <div className='card-section'>
                    {
                        infos.map(info => <Card key={info.id} info={info} addToList={addToList} />)
                    }
                </div>
            </div>
            <div className='sidebar-container'>
                <SideBar timing={timing} />
            </div>
        </div>
    );
};

export default Home;