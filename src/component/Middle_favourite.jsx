import '../style/Middle_favourite.css'
import { useState } from 'react'
import { getProductImage } from '../lib/productImages'

function Middle_favourite() {
    const Default_fav = [
        {
            type: "Rice",
            price: "0.50$",
            location: "Kandal",
            phonenumber: "012 738 805",
            image: getProductImage("Rice")
        },
        {
            type: "Corn",
            price: "0.30$",
            location: "Kandal",
            phonenumber: "012 738 805",
            image: getProductImage("Corn")
        },
        {
            type: "Tomato",
            price: "0.40$",
            location: "Kandal",
            phonenumber: "012 738 805",
            image: getProductImage("Tomato")
        },
    ]

    const savedFav = JSON.parse(localStorage.getItem("favourite_posts") || "[]");
    const [posts, setPosts] = useState(savedFav.length > 0 ? savedFav : Default_fav);

    function handleDelete(index) {
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);
        localStorage.setItem("favourite_posts", JSON.stringify(updatedPosts));
    }

    return (
        <div className="fav-container">
            <div className='fav-header'>
                <h2>Favourite</h2>
            </div>

            {posts.length === 0 ? (
                <p>No favourites yet.</p>
            ) : (
                <div className="fav-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="fav-card">
                            <div className="card-image">
                                <img src={post.image} alt="product" />
                            </div>
                            <div className="card-info">
                                <div className="card-row">
                                    <span className="card-type">{post.type}</span>
                                    <span className="card-phone">{post.phonenumber}</span>
                                </div>
                                <div className="card-row">
                                    <span className="card-price">{post.price}/kg</span>
                                    <span className="card-location">{post.location}</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <svg
                                    onClick={() => handleDelete(index)}
                                    style={{ cursor: 'pointer' }}
                                    width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#e53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Middle_favourite;