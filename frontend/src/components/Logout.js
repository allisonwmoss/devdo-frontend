import React, { useState, useEffect, Fragment } from 'react';
import { APIURL, FRONTURL } from '../config';
import { Button } from 'reactstrap'
const Logout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            window.location.replace(`${FRONTURL}/login`);
        } else {
            setLoading(false);
        }
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/api-auth/auth/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.clear();
                window.location.replace(`${FRONTURL}/login`);
            });
    };

    return (
        <div className="container">
            {loading === true && (
                <Fragment>
                    <h1>loading, please wait</h1>
                </Fragment>
            )}
            {loading === false && (
                <Fragment>
                    <h1 className="boldwhite">Are you sure you want to log out?</h1>
                    <Button value='Logout' onClick={handleLogout}>Log out</Button>
                </Fragment>
            )}
        </div>
    );
};

export default Logout;