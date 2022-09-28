import React, { useEffect, useState } from 'react';

const Body = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    
    return (
        <div>
            <h2>Say hi to my new assignment</h2>
            {
                data.map(pb => <img src={pb.img}></img>)
            }
            <img src="" alt="" />
        </div>
    );
};

export default Body;