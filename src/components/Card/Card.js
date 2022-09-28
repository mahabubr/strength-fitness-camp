import React from 'react';
import './Card.css'

const Card = ({info}) => {

    console.log(info)

    const {name, description, thumb, age, time} = info

    return (
        <div className='card' data-aos="zoom-in-up">
            <img src={thumb} alt="" />
            <h2 className='card-title'>{name}</h2>
            <p className='card-des'>{description.slice(0, 100)}...</p>
            <p className='card-age'>For Age : <span>{age}</span></p>
            <p className='card-time'>Time Required : <span>{time}s</span></p>
            <button className='card-btn'>Add To List</button>
        </div>
    );
};

export default Card;