import React, { useState } from 'react';
import './Register.css'; 
import googleicon from '../assets/googleicon.png';
import background from "../assets/gradient.png";
import { Link } from 'react-router-dom';



const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log(email, name, password);
    };
    const handleGoogleSubmit = () => {
        console.log(email, name, password);
    };
    return (
        <div className="Register-screen">
            <div className="Register-halfone">
                <div className="Register-accounttitle">Make an account</div>
                <div className="input-container"></div>
                <div className="input-container">
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="input-container"></div>
                <button onClick={handleSubmit} className="submitBtn">Sign Up</button>
                <div className="input-container"></div>
                <button onClick={handleGoogleSubmit} className="googBtn">
                    <img src={googleicon} alt = "" className="googleicon" />
                    Sign up with Google
                </button>

            </div>
            <div className="Register-halftwo" style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="welcomeTitle">Hello, Friend!</div>
                <div className="input-container"></div>
                <div className="welcomeSubTitle">Have an account?</div>
                <div className="input-container"></div>
                <div className="loginBtn">
                    <Link to="/">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
