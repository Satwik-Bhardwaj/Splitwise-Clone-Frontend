import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {

    const [showPassword, setShowPassword] = useState(false);
    const [keepSignIn, setKeepSignIn] = useState(false);

    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleCheckboxChange = (e) => {
        setKeepSignIn(e.target.checked);
    }

    const [formData, setFormData] = useState({
        userId: "",
        password: ""
    })

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/login', formData);
            console.log('Response', response.data);
            sessionStorage.setItem('ac:t', response.data.accessToken);
            localStorage.setItem('rf:t', response.data.refreshToken)
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <div className="auth-panel">
            <div className="auth-core-panel">
                <div className="auth-core-header">
                    <h1 className="create-account-header">Sign In account</h1>
                    <p className="p-auth-statements">Don't have any account? <Link to={'/sign-up'}>Sign up</Link>
                    </p>
                </div>
                <div className="auth-core-body">
                    <div className="auth-field">
                        <div className="auth-field-top">
                            <p className="auth-field-label">
                                Email address *
                            </p>
                        </div>
                        <input className="auth-field-input" type="email" name="userId" placeholder='example@domain.com' onChange={handleFormChange}/>
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
                        <input className="auth-field-input" type={showPassword ? "text" : "password"} name="password" onChange={handleFormChange}/>
                    </div>
                    <div className="auth-field">
                        <p className="p-auth-statements">Keep me signed in <input type="checkbox" className='keepme-signedin-checkbox' checked={keepSignIn} onChange={handleCheckboxChange}/> </p> 
                    </div>
                    <div className="auth-field">
                        <button className="auth-submit" type="submit" onClick={handleSubmit}>Sign In</button>
                    </div>
                </div>
                <hr className="auth-section-breaker" />
                <div className="auth-core-footer">
                    <div className="auth-field">
                        <button className='auth-with-btn google-sign-btn' type="button" onClick={()=>{window.location.href ="http://localhost:8081/oauth2/authorization/google"}}>Sign In with Google <i class='bx bxl-google'></i></button>
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

export default SignIn;