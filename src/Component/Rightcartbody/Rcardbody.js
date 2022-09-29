import React from 'react';
import logo from '../../images/Man.jpg'
import './Rcardbody.css'

const Rcardbody = () => {
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
                            <h1>75kg</h1>
                            <p>Weight</p>
                        </div>
                        <div className="height">
                            <h1>6.6in</h1>
                            <p>Height</p>
                        </div>
                        <div className="age">
                            <h1>25yrs</h1>
                            <p>Age</p>
                        </div>
                  </div>
                
               <h2>Add A Break</h2>
                <div className='break-time'>
                        <h3>10m</h3>
                        <h3>20m</h3>
                        <h3>30m</h3>
                        <h3>40m</h3>
                        <h3>50m</h3>
                </div>
                <div className="exercise">
                    <h1>Exercise Details</h1>
                    <div className="ex-time">
                        <h2>Exercise Time:</h2>
                        <h2></h2>
                    </div>
                    <div className="ex-time">
                        <h2>Break Time:</h2>
                        <h2></h2>
                    </div>
                </div>
                <button className='rcard-btn'>Activity Complete</button>
              </div>       
        </div>
    );
};

export default Rcardbody;