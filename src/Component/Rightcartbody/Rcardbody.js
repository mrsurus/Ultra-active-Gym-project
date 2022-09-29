import React, { useEffect, useState } from 'react';
import logo from '../../images/Man.jpg'
import './Rcardbody.css'

const Rcardbody = ({cart,completeActivity}) => {
    const [brtime, setBrtime] =useState([])

   let time = 0
   if(cart.length){
   
    for(const product of cart){
        time = time + product.time
    }
   }
   
   useEffect(()=>{
    const s = JSON.parse(localStorage.getItem('break-time'))
   setBrtime(s)

   },[])
   
   const clicledOnTime= (id) =>{
    setBrtime(id)
    localStorage.setItem('break-time',JSON.stringify(id))
    
   }

    return (
        <div>
            <div className="right-cart">
                  <div className="profile">
                      <div className='image'>
                       <img src={logo} alt="" />
                      </div>
                      <div>
                        <h2><b> Saidul Islam</b></h2>
                        <h2><b> Torento, Canda</b></h2>

                      </div>
                  </div>
                  <div className="profile-det">
                        <div className="Weight">
                            <h1>55kg</h1>
                            <p>Weight</p>
                        </div>
                        <div className="height">
                            <h1>5.7ft</h1>
                            <p>Height</p>
                        </div>
                        <div className="age">
                            <h1>22yrs</h1>
                            <p>Age</p>
                        </div>
                  </div>
                
               <h2>Add A Break</h2>
                <div className='break-time'>
                        <h3 onClick={(e) =>clicledOnTime(e.target.innerText)}>10m</h3>
                        <h3 onClick={(e) =>clicledOnTime(e.target.innerText)}>20m</h3>
                        <h3 onClick={(e) =>clicledOnTime(e.target.innerText)}>30m</h3>
                        <h3 onClick={(e) =>clicledOnTime(e.target.innerText)}>40m</h3>
                        <h3 onClick={(e) =>clicledOnTime(e.target.innerText)}>50m</h3>
                </div>
                <div className="exercise">
                    <h1>Exercise Details</h1>
                    <div className="ex-time">
                        <h2>Exercise Time:</h2>
                        <h2 id='ex-time'> {time}m</h2>
                    </div>
                    <div className="ex-time">
                        <h2>Break Time:</h2>
                        <h2 id='br-time'>{brtime}</h2>
                    </div>
                </div>
                <button onClick={completeActivity} className='rcard-btn'>Activity Complete</button>
              </div>       
        </div>
    );
};

export default Rcardbody;