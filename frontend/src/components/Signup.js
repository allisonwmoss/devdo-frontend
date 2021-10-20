import React, { useState, useEffect } from 'react';
import { APIURL, FRONTURL } from '../config';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace(`${FRONTURL}/ideas`);
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password1: password1,
            password2: password2
        };

        fetch(`${APIURL}/api-auth/auth/register/`, {
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
                    window.location.replace(`${FRONTURL}/ideas`);
                } else {
                    setEmail('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setError(true);
                }
            });
    };

    return (
        <div>
            {loading === false && <h1>Signup</h1>}
            {error === true && <h2>Sorry, we couldn't create an account with those credentials.</h2>}
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email address:</label> <br />
                <input
                    name='email'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='password1'>Password:</label> <br />
                <input
                    name='password1'
                    type='password'
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='password2'>Confirm password:</label> <br />
                <input
                    name='password2'
                    type='password'
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    required
                />{' '}
                <br />
                <input type='submit' value='Signup' />
            </form>
        </div>
    );
};

export default Signup;