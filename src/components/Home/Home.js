import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {

    const [infos, setInfos] = useState([])

    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setInfos(data))
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
                        infos.map(info => <Card key={info.id} info={info} />)
                    }
                </div>
            </div>
            <div>
                <h1>Side Bar</h1>
            </div>
        </div>
    );
};

export default Home;