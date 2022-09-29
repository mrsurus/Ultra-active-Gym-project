import React from 'react';
import './Nav.css'
import logo from '../../images/favicon.png'

const Nav = () => {
    return (
        <div className='nav'>
           <div className="nav-m">
              <img src={logo} alt="" />
              <h1>My Gym</h1>
           </div>
        </div>
    );
};

export default Nav;