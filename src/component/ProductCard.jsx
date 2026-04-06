import React from 'react';
import { FiHeart } from 'react-icons/fi';
import '../style/ProductCard.css';

function ProductCard({ image, name, price, unit, isBrand = false }) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />
                <button className="heart-btn">
                    <FiHeart />
                </button>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                {price && <p className="price">{price}</p>}
                {unit && <p className="unit">{unit}</p>}
            </div>
        </div>
    );
}

export default ProductCard;
