import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }
    const handlePhoneNumberChange = (e) => {
        const tempNumber = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{3})(?=\d)/g, "$1 ");;
        setPhoneNumber(tempNumber);
      };

      const [count, setCount] = useState(0);

    return (
        <div className="auth-panel">
            <div className="auth-core-panel">
                <div className="auth-core-header">
                    <h1 className="create-account-header">Create a new account</h1>
                    <p className="p-auth-statements">Already have an account? <Link to={'/sign-in'}>Sign In</Link>
                    </p>
                </div>
                <div className="auth-core-body">
                    <div className="auth-field">
                        <div className="auth-field-top">
                            <p className="auth-field-label">
                                Email address *
                            </p>
                        </div>
                        <input className="auth-field-input" type="email" placeholder='example@domain.com'/>
                    </div>
                    <div className="auth-field">
                        <div className="auth-field-top">
                            <p className="auth-field-label">
                                Full Name *
                            </p>
                        </div>
                        <input className="auth-field-input" type="email" placeholder='Smith Joe'/>
                    </div>
                    <div className="auth-field">
                        <div className="auth-field-top">
                            <p className="auth-field-label">
                            Password *
                            </p>
                            <p className="auth-field-extra password-view" onClick={handleTogglePassword}>
                                {showPassword ? (<><i class='bx bxs-hide'></i> Hide</>) : (<><i class='bx bxs-show'></i> Show</>)}
                                
                            </p>
                        </div>
                        <input className="auth-field-input" type={showPassword ? "text" : "password"} />
                    </div>
                    <div className="auth-field">
                        <div className="auth-field-top">
                            <p className="auth-field-label">
                                Phone No. *
                            </p>
                        </div>
                        <div className="signup-field-ph">
                            <select>
                                <option value="+1">+1</option>
                                <option value="+91">+91</option>
                            </select>
                            <input className="signup-field-ph-input" type="text" placeholder='+91 XXX XXX XXXX' onChange={handlePhoneNumberChange} value={phoneNumber} />
                        </div>
                    </div>
                    <div className="auth-field">
                        <p className="p-auth-statements">By creating an account, you agree to our <a href="/#">Terms of use</a> and <a href='/#'>Privacy Policy</a></p>
                    </div>
                    <div className="auth-field">
                        <button className="auth-submit" type="submit">Create an account</button>
                    </div>
                </div>
                <hr className="auth-section-breaker" />
                <div className="auth-core-footer">
                    <div className="auth-field">
                        <button className='auth-with-btn google-sign-btn' type="button">Sign In with Google <i class='bx bxl-google'></i></button>
                    </div>
                    <div className="auth-field">
                        <button className='auth-with-btn microsoft-sign-btn' type="button">Sign In with Microsoft <i class='bx bxl-microsoft'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;