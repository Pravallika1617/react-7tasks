import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    

    const submit = (e) => {
        e.preventDefault();

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        navigate('/home');

    };

    return (
        <div className='signup'>
            
            <form onSubmit={submit}>
            <h1>Sign Up</h1>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
