import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/ideas');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        fetch(`${APIURL}/api-auth/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    window.location.replace('http://localhost:3000/ideas');
                } else {
                    setEmail('');
                    setPassword('');
                    localStorage.clear();
                    setError(true);
                }
            });
    };

    return (
        <div>
            {loading === false && <h1>Login</h1>}
            {error === true && <h2>Sorry, we couldn't log you in with those credentials.</h2>}
            {loading === false && (
                <form onSubmit={onSubmit}>
                    <label htmlFor='email'>Email address:</label> <br />
                    <input
                        name='email'
                        type='email'
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />{' '}
                    <br />
                    <label htmlFor='password'>Password:</label> <br />
                    <input
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />{' '}
                    <br />
                    <input type='submit' value='Login' />
                </form>
            )}
        </div>
    );
};

export default Login;