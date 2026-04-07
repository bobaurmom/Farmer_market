import { useState } from 'react';
import '../style/sign_in.css';
import Button from '../component/button';

function Sign_in() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        
        if (!formData.email || !formData.password) {
            setError('សូមបំពេញអ៊ីមែល និង ពាក្យសម្ងាត់');
            return;
        }
        
        // Check if admin credentials
        if (formData.email === 'admin@123.com' && formData.password === 'admin123') {
            const adminUser = {
                id: 'admin',
                name: 'Admin',
                email: 'admin@123.com',
                role: 'admin'
            };
            localStorage.setItem('currentUser', JSON.stringify(adminUser));
            window.location.href = '/dashboard';
            return;
        }
        
        // Check if user exists (READ operation)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === formData.email && u.password === formData.password);
        
        if (user) {
            // Set logged in user
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/main_buying_page';
        } else {
            setError('អ៊ីមែល ឬ ពាក្យសម្ងាត់មិនត្រឹមត្រូវ');
        }
    };

    return (
        <div className="sign_in">
            <div className="sign_in_content">
                <h1>សូមស្វាគមន ៌</h1>
                <form onSubmit={handleSubmit}>
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
                </form>
                {error && <div className="error_message" style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
                <Button onClick={handleSubmit} disabled={false}>ចូលប្រើប្រាស់</Button>
                <div className="sign_in_link">
                    <a href="/forget_pass">ភ្លេចពាក្យសម្ងាត់?</a>
                </div>
                <div className="sign_in_link">
                    <span>មិនទាន់មានគណនី?</span>
                    <a href="/sign_up">ចុះឈ្មោះ</a>
                </div>
                <div className="sign_in_link" style={{marginTop: '15px', fontSize: '12px', color: '#999'}}>
                    <span>Admin: admin@123.com / admin123</span>
                </div>
            </div>
        </div>
    )
}
export default Sign_in;
