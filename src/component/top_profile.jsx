
import React from 'react';
import pf from '../assets/profile.jpg'; 
import { FaBell } from 'react-icons/fa';
function Top_profile () {
    return (
        <div className="top_profile">
            <div className='left'>
                <img src={pf} alt="Profile" className="profile_pic" />
                <h2>ឈ្មោះអ្នកប្រើប្រាស់</h2>
            </div>
            <div className='right'>
                <button>លក់ទំនិញ</button>
                <button><FaBell /></button>
            </div>

        </div>
    )
}
export default Top_profile;