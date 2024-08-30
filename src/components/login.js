import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [logged, setLogged] = useState(false);

    const navigate = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        setLogged(true);
        navigate('/home');
    }


    return (
        <div className='loginForm'>
            <form onSubmit={submit}>
                <h1>Login</h1>
                <div>
                    <label>Email/Username:</label><input id="user1" type='text' placeholder='Enter email/Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:<input id="user2" type='password' placeholder='Password' value={pwd} onChange={(e) => setPwd(e.target.value)} required /></label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <div>
                    <p>Don't have an account:<Link to='/signup'>Create One...</Link></p>
                </div>
            </form>
            {logged && <p>You are logged in!</p>}
        </div>
    )
}

export default Login;
