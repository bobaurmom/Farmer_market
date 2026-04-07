import '../style/Middle_favourite.css'
import { useState } from 'react'
import { getFavs, removeFav } from '../Data/favstore'

function Middle_favourite() {
    const [posts, setPosts] = useState(() => getFavs());

    function handleDelete(item) {
        removeFav(item);
        setPosts(getFavs());
    }

    return (
        <div className="fav-container">
            <div className='fav-header'>
                <h2>ចំណង់ចំណូលចិត្ត</h2>
            </div>

            {posts.length === 0 ? (
                <p>No favourites yet.</p>
            ) : (
                <div className="fav-grid">
                    {posts.map((post, index) => (
                        <div key={index} className="fav-card">
                            <div className="card-image">
                                <img src={post.img} alt={post.name} />
                            </div>
                            <div className="card-info">
                                <div className="card-row">
                                    <span className="card-type">{post.name}</span>
                                    <span className="card-phone">{post.phone}</span>
                                </div>
                                <div className="card-row">
                                    <span className="card-price">{post.price}</span>
                                    <span className="card-location">{post.location}</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <svg
                                    onClick={() => handleDelete(post)}
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