import { useState } from "react";
import '../style/Middle_sell.css';
import riceImg from '../assets/rice.png';
import { useNavigate } from 'react-router-dom';
import { getProductImage } from '../lib/productImages'; // ← import

function Middle_sell() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        type: "",
        price: "",
        location: "",
        phonenumber: "",
        image: riceImg,
    });

    function handleChange(e) {
        const { name, value } = e.target; // same as const name = e.target.name , const value = e.target.value

        //  auto-update image when user types product type
        if (name === "type") {
            setFormData({ ...formData, [name]: value, image: getProductImage(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const products = JSON.parse(localStorage.getItem("posts") || "[]");
        products.push(formData);
        localStorage.setItem("posts", JSON.stringify(products));
        setFormData({
            type: "",
            price: "",
            location: "",
            phonenumber: "",
            image: riceImg,
        });
        navigate('/history');
    }

    return (
        <div className="sell-container">
            <div className="sell-box">
                <h2>លក់ជាមួយកសិវិទ្យា</h2>កសិវិទ្យាជាកន្លែងប្រមូលផ្តុំកសិកម្ម 
        
                <form onSubmit={handleSubmit} className="sell-form">
                    <div className="form-row">
                        <label htmlFor="type">ប្រភេទដំណាំ</label>
                        <input type="text" name="type" placeholder="ឧទាហរណ៌ៈ ស្រូវ" value={formData.type} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="price">តម្លៃ</label>
                        <input type="number" name="price" placeholder="ឧទាហរណ៌ៈ ១០០០០" value={formData.price} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="location">ទីតាំង</label>
                        <input type="text" name="location" placeholder="ឧទាហរណ៌ៈ កណ្តាល" value={formData.location} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="phonenumber">លេខទូរសព្ទ</label>
                        <input type="text" name="phonenumber" placeholder="ឧទាហរណ៌ៈ ០៨៧​ ៣៥៦ ៨៩៩" value={formData.phonenumber} onChange={handleChange} required />
                    </div>
                    <button type="submit">ផ្សព្វផ្សាយសាធារណ</button>
                </form>

                <svg className="point" width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 41C13.5 38.25 8.00129 30 5.00063 25C1.99996 20 8.3132 15.3125 12.0004 19C15.6876 22.6875 16.0004 23 16.0004 23V7.50001C16.0004 5.56701 17.5674 4 19.5004 4C21.4334 4 23.0004 5.56701 23.0004 7.50001V16C23.0004 14.067 24.5674 12.5 26.5004 12.5C28.4334 12.5 30.0004 14.067 30.0004 16V17.5C30.0004 15.567 31.5674 14 33.5004 14C35.4334 14 37.0004 15.5655 37.0004 17.4985V22.5002C37.0004 20.5672 38.5674 19 40.5004 19C42.4334 19 44.0004 20.567 44.0004 22.5V31.2439C44.0004 32.3988 43.7376 33.5441 43.0869 34.4982C41.9179 36.2122 39.6023 39.0351 36 41C30.4999 44 24.5 43.75 19 41Z"
                     fill="#e4cd84" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h6>ចុចប្រអប់ពណ៌ប៉ៃតងដើម្បីផ្សព្វផ្សាយ</h6>
            </div>
        </div>
    );
}

export default Middle_sell;
