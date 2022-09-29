import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Rcardbody from '../Rightcartbody/Rcardbody';
import './Body.css'

const Body = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    
    return (
        <div className='body'> 
            <div className="left-side">
                <h2>Todays session</h2>
                <div className="card-container">
                    {
                        data.map(data =><Card data = {data}></Card>)
                    }
                </div>
            </div>

            <div className="right-side">
                    <Rcardbody></Rcardbody>
            </div>
        </div>
    );
};

export default Body;