import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Rcardbody from '../Rightcartbody/Rcardbody';
import './Body.css'
import Swal from 'sweetalert2'

const Body = () => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    const getAddToList = (data) =>{
        const newData = [...cart,data]
       setCart(newData)
    }
    const completeActivity = () =>{
        Swal.fire(
        'Good job!',
        'You completed your activity!',
        'success'
)
    }

    return (
        <div className='body'> 
            <div className="left-side">
                <h2>Todays session</h2>
                <div className="card-container">
                    {
                        data.map(data =><Card 
                            data = {data}
                            getAddToList = {getAddToList}
                            key = {data.id}

                            ></Card>)
                    }
                </div>
            </div>

            <div className="right-side">
                   <Rcardbody cart={cart} completeActivity= {completeActivity}  ></Rcardbody>
            </div>
        </div>
    );
};

export default Body;