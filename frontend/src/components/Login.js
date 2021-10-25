import React, { useState, useEffect } from 'react';
import { APIURL, FRONTURL } from '../config';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                    window.location.replace(`${FRONTURL}/ideas`);
                } else {
                    setEmail('');
                    setPassword('');
                    localStorage.clear();
                    setError(true);
                }
            });
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            {loading === false && <h1 className="boldwhite">Log in</h1>}
            {error === true && <h2>Sorry, we couldn't log you in with those credentials.</h2>}
            {loading === false && (
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label htmlFor='email' className="boldwhite">Email address:</Label> <br />
                        <Input
                            name='email'
                            type='email'
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />{' '}
                        <br />
                        <Label htmlFor='password' className="boldwhite">Password:</Label> <br />
                        <Input
                            name='password'
                            type='password'
                            value={password}
                            required
                            onChange={e => setPassword(e.target.value)}
                        />{' '}
                        <br />
                    </FormGroup>
                    <Button type='submit' value='Login' id="modal-btn">Log in</Button>
                </Form>
            )}
            {loading === false && (
                <div className="container d-flex flex-column align-items-center my-5">
                    <h3 className="boldwhite">New to DevDo?</h3>
                    <Link to="/signup">
                        <Button className="thumb">Create account</Button>
                    </Link>
                </div>

            )}
        </div>
    );
};

export default Login;