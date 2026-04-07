import { useState } from "react";
import '../style/forget_pass.css';
import Button from '../component/button';

function Forget_pass () {
    // track which step of the form we're on
    const [step, setStep] = useState(1); 
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSendCode = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email address");
            return;
        }
        setError("");
        setStep(2);
    };

    const handleVerifyCode = (e) => {
        e.preventDefault();
        if (!code) {
            setError("Please enter the verification code");
            return;
        }
        // fake verification since no backend
        if (code === "123456") {
            setError("");
            setStep(3);
        } else {
            setError("Invalid verification code");
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!newPassword || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        setError("");
        alert("Password reset successfully!");
        window.location.href = "/sign-in";

    };

    // three different forms depending on the step
    return (
        <div className="forget_pass">
            <div className="forget_pass_content">
                {step === 1 && (
                    <>
                        <h1>ស្ដារពាក្យសម្ងាត់</h1>
                        <form onSubmit={handleSendCode}>
                            <div className="form_group">
                                <label>អ៊ីមែល</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </form>
                        {error && <div className="error_message">{error}</div>}
                        <Button onClick={handleSendCode} disabled={false}>ផ្ញើលេខកូដ</Button>
                        <div className="forget_pass_link">
                            <a href="/sign-in">ត្រលប់ទៅ ចូលប្រើប្រាស់</a>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        {/* verify the code user got */}
                        <h1>ផ្ទៀងផ្ទាត់លេខកូដ</h1>
                        <p className="step_description">We sent a verification code to {email}</p>
                        <form onSubmit={handleVerifyCode}>
                            <div className="form_group">
                                <label>លេខកូដផ្ទៀងផ្ទាត់</label>
                                <input 
                                    type="text" 
                                    name="code"
                                    placeholder="Enter the 6-digit code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    maxLength="6"
                                    required
                                />
                            </div>
                        </form>
                        {error && <div className="error_message">{error}</div>}
                        <Button onClick={handleVerifyCode} disabled={false}>ផ្ទៀងផ្ទាត់</Button>
                        <div className="forget_pass_link">
                            <a href="#" onClick={() => {
                                setStep(1);
                                setCode("");
                                setEmail("");
                                setError("");
                            }}>ផ្ញើលេខកូដឡើងវិញ</a>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        {/* final step: enter new password */}
                        <h1>កំណត់ពាក្យសម្ងាត់ថ្មី</h1>
                        <form onSubmit={handleResetPassword}>
                            <div className="form_group">
                                <label>ពាក្យសម្ងាត់ថ្មី</label>
                                <input 
                                    type="password" 
                                    name="newPassword"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form_group">
                                <label>បញ្ជាក់ពាក្យសម្ងាត់</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </form>
                        {error && <div className="error_message">{error}</div>}
                        <Button onClick={handleResetPassword} disabled={false}>កំណត់ពាក្យសម្ងាត់</Button>
                        <div className="forget_pass_link">
                            <a href="/sign-in">ត្រលប់ទៅ ចូលប្រើប្រាស់</a>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Forget_pass;