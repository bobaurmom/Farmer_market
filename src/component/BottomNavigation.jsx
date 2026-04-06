import React from 'react';
import { GoHome, GoNumber } from 'react-icons/go';
import { MdOutlineGridView, MdOutlineFavoriteBorder } from 'react-icons/md';
import '../style/BottomNavigation.css';

function BottomNavigation() {
    return (
        <div className="bottom-nav">
            <button className="nav-item active">
                <GoHome size={24} />
                <span>ដើម</span>
            </button>
            <button className="nav-item">
                <MdOutlineGridView size={24} />
                <span>ម៉ឺនុយ</span>
            </button>
            <button className="nav-item">
                <GoNumber size={24} />
                <span>ប្រដាប់</span>
            </button>
            <button className="nav-item">
                <MdOutlineFavoriteBorder size={24} />
                <span>ចូលចិត្ត</span>
            </button>
        </div>
    );
}

export default BottomNavigation;
