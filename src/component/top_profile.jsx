
import React from 'react';
import pf from '../assets/profile.jpg'; 
import { FaBell } from 'react-icons/fa';
function Top_profile () {
    return (
        <div className="top_profile">
            <div className='left'>
                <img src={pf} alt="Profile" className="profile_pic" />
                <div className="profile-text">
                    <p className="greeting">Hello</p>
                    <h2 className="username">John Doe</h2>
                </div>
            </div>
            <div className='right'>
                <button className="sell-btn">sell</button>
                <button className="bell-btn"><FaBell /></button>
            </div>
        </div>
    )
}
export default Top_profile;