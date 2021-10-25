import React, { useState, useEffect } from 'react';
import { APIURL, FRONTURL } from '../config';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
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
            username: username,
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
                    setUsername('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setError(true);
                }
            });
    };

    return (
        <div className="container d-flex flex-column align-items-center">
            {loading === false && <h1 className="boldwhite">Join DevDo</h1>}
            {error === true && <h2>Sorry, we couldn't create an account with those credentials.</h2>}
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label htmlFor='email' className="boldwhite">Email address:</Label> <br />
                    <Input
                        name='email'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />{' '}
                    <br />
                    <Label htmlFor='username' className="boldwhite">Username:</Label> <br />
                    <Input
                        name='username'
                        type='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />{' '}
                    <br />
                    <Label htmlFor='password1' className="boldwhite">Password:</Label> <br />
                    <Input
                        name='password1'
                        type='password'
                        value={password1}
                        onChange={e => setPassword1(e.target.value)}
                        required
                    />{' '}
                    <br />
                    <Label htmlFor='password2' className="boldwhite">Confirm password:</Label> <br />
                    <Input
                        name='password2'
                        type='password'
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        required
                    />{' '}
                    <br />
                </FormGroup>
                <Button type="submit" id="modal-btn">Create account</Button>
            </Form>
        </div>
    );
};

export default Signup;