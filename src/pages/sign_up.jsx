import { useState } from 'react';
import '../style/sign_up.css';
import Button from '../component/button';

function Sign_up() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('សូមបំពេញ តម្រូវការទាំងអស់');
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            setError('ពាក្យសម្ងាត់មិនដូចគ្នាទេ');
            return;
        }
        
        if (formData.password.length < 6) {
            setError('ពាក្យសម្ងាត់ត្រូវតែ 6 តួអក្សរឬច្រើនជាងនេះ');
            return;
        }
        
        // make sure email isn't already registered
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(user => user.email === formData.email)) {
            setError('អ៊ីមែលនេះបានចុះឈ្មោះរួចហើយ');
            return;
        }
        
        // save new user to storage
        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // remember this user for the session
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        alert('ចុះឈ្មោះបានជោគជ័យ!');
        window.location.href = '/main_buying_page';
    };

    return (
        <div className="sign_up">
            <div className="sign_up_content">
                <h1>ចូលរួម កសិវិទ្យា</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label>ឈ្មោះ</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="ឈ្មោះរបស់អ្នក" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>អ៊ីមែល</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="អ៊ីមែលរបស់អ្នក" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>ពាក្យសម្ងាត់</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="ពាក្យសម្ងាត់របស់អ្នក" 
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>បញ្ជាក់ពាក្យសម្ងាត់</label>
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="បញ្ជាក់ពាក្យសម្ងាត់របស់អ្នក" 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </form>
                {error && <div className="error_message" style={{color: 'red', marginBottem: '10px'}}>{error}</div>}
                <Button onClick={handleSubmit} disabled={false}>ចុះឈ្មោះ</Button>

                <div className="sign_in_link">
                    <span>មានគណនីរួចហើយ? </span>
                    <a href="/sign_in">ចូលប្រើប្រាស់</a>
                </div>
            </div>
        </div>
    );
}
export default Sign_up;