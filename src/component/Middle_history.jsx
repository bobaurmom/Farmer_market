import '../style/Middle_history.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductImage } from '../lib/productImages'

function Middle_history() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // know where index that we need index
    const [editData, setEditData] = useState({}); 
    // for default value
    const DEFAULT_POSTS = [
    {
        type: "ស្ពៃ",
        price: "11000",
        location: "កណ្តាល",
        phonenumber: "០១២​ ៧៣៨​ ៨០៥​",
        image: getProductImage("ស្ពៃ")
    },
    {
        type: "ពោត",
        price: "5000",
        location: "កណ្តាល",
        phonenumber: "០១២ ៧៣៨ ៨០៥",
        image: getProductImage("ពោត")
    },
    {
        type: "សណ្តែក",
        price: "2000",
        location: "Kandal",
        phonenumber: "012 738 805",
        image: getProductImage("longbean")
    },
];

    useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");

    if (savedPosts.length === 0) {
        // No data yet save defaults into localStorage
        setPosts(DEFAULT_POSTS);
        localStorage.setItem("posts", JSON.stringify(DEFAULT_POSTS));
    } else {
        // Already has data  use it
        setPosts(savedPosts);
    }
    }, []);

    function handleDelete(index) {
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }

    function handleEditClick(index) {
        setEditIndex(index);
        setEditData({ ...posts[index] });
    }

    function handleEditChange(e) {
        const { name, value } = e.target;
        
        //  when user edits type, auto-update image too
        if (name === "type") {
            setEditData({ ...editData, [name]: value, image: getProductImage(value) });
        } else {
            setEditData({ ...editData, [name]: value });
        }
}

    function handleEditSave() {
        const updatedPosts = posts.map((post, i) =>
            i === editIndex ? editData : post
        );
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        setEditIndex(null);
    }

    function handleEditCancel() {
        setEditIndex(null);
    }

    return (
        <div className="history-container">
            <div className='main-header'>
                <h2>ប្រវិត្តផ្សព្វផ្សាយ</h2>
                <svg onClick={() => navigate('/Main_sell')} style={{ cursor: 'pointer' }} fill="#008000" width="30px" height="30px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M856 40H142q-42 0-72 30t-30 72v714q0 42 30 72t72 30h714q42 0 72-30t30-72V142q0-42-30-72t-72-30zM754 550H550v204H448V550H244V448h204V244h102v204h204v102z"/>
                </svg>
            </div>

            <div className='main-container'>
                {posts.length === 0 ? (
                    <p>No posts yet.</p>
                ) : (
                    posts.map((post, index) => (
                        <div key={index}>
                            {editIndex === index ? (
                                <div className="edit-card">
                                    <div className="form-row">
                                        <label>Product Type</label>
                                        <input name="type" value={editData.type} onChange={handleEditChange} />
                                    </div>
                                    <div className="form-row">
                                        <label>Price</label>
                                        <input name="price" value={editData.price} onChange={handleEditChange} />
                                    </div>
                                    <div className="form-row">
                                        <label>Location</label>
                                        <input name="location" value={editData.location} onChange={handleEditChange} />
                                    </div>
                                    <div className="form-row">
                                        <label>Phone Number</label>
                                        <input name="phonenumber" value={editData.phonenumber} onChange={handleEditChange} />
                                    </div>
                                    <div className="edit-buttons">
                                        <button className="save-btn" onClick={handleEditSave}>Save</button>
                                        <button className="cancel-btn" onClick={handleEditCancel}>Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="history-card">
                                    <div className="card-image">
                                        {/* ← only change is here, removed riceImg fallback */}
                                        <img src={post.image} alt="product" />
                                    </div>
                                    <div className="card-info">
                                        <div className="card-row">
                                            <span className="card-type">{post.type}</span>
                                            <span className="card-phone">{post.phonenumber}</span>
                                        </div>
                                        <div className="card-row">
                                            <span className="card-price">{post.price}៛/kg</span>
                                            <span className="card-location">{post.location}</span>
                                        </div>
                                    </div>

                                    <div className="card-actions">
                                        <svg
                                            onClick={() => handleEditClick(index)}
                                            style={{ cursor: 'pointer' }}
                                            width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#008000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#008000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <svg
                                            onClick={() => handleDelete(index)}
                                            style={{ cursor: 'pointer' }}
                                            width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#e53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Middle_history;

