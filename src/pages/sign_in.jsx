import react from 'react';
import '../style/sign_in.css';
import Button from '../component/button';


function Sign_in () {
    return (
        <div className="sign_in">
            <div className="sign_in_content">
                <h1>សូមស្វាគមន ៌</h1>
                <form>
                    <div className="form_group">
                        <label>អ៊ីមែល</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="អ៊ីមែលរបស់អ្នក"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>ពាក្យសម្ងាត់</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="ពាក្យសម្ងាត់របស់អ្នក"
                            required
                        />
                    </div>
                </form>
                <Button onClick={() => window.location.href = '/main_buying_page'} disabled={false}>ចូលប្រើប្រាស់</Button>
                <div className="sign_in_link">
                    <a href="/forgot_password">ភ្លេចពាក្យសម្ងាត់?</a>
                </div>
                <div className="sign_in_link">
                    <span>មិនទាន់មានគណនី?</span>
                    <a href="/sign_up">ចុះឈ្មោះ</a>
                </div>
            </div>
        </div>
    )
}
export default Sign_in;
