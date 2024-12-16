import React from 'react'
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setToken, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onLogin = async () => {
        const url = "http://localhost:8000/api/login";

        const requestOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        };

        const response = await fetch(url, requestOptions);

        if (response.status == 200) {
            const responseJSON = await response.json();

            const token = responseJSON.token;
            setToken(token);
            setIsAuthenticated(true);
            
            navigate("/employees");
        } else {
            alert("Invalid Credentials!");
        }
    }

    return (
        <>
            <h2>Login</h2>
            <p>
                <label>Email: </label>
                <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
            </p>
            <p>
                <label>Password: </label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            </p>
            <button onClick={onLogin}>Login</button>
        </>
    )
}

export default Login