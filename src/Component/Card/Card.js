import React from 'react';
import './Card.css'
const Card = ({data}) => {
    console.log(data)
    const {img,name,details,age,time}= data;
    return (
        <div>
            <div className="card">
                <img src={img} alt="" />
                <div className="card-info">
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <h3>Age: {age} </h3>
                    <h3>Age: {time} </h3>
                </div>
                <button className='card-btn'>Add To List</button>
            </div>
        </div>
    );
};

export default Card;