import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { APIURL } from '../config'
import IdeaForm from './IdeaForm'
export default function UserLogin() {
    const initialLoginState = {
        username: '',
        password: '',
    }
    const [loginDeets, setLoginDeets] = useState(initialLoginState)
    const [userId, setUserId] = useState(null)
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        e.persist()
        setLoginDeets({
            ...loginDeets,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = `${APIURL}/accounts/login`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(idea)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedId(data._id)
            })
            .catch(() => {
                setError(true)
            })
    }
    if (createdId) {
        return <Redirect to={`/ideas/${createdId}`} />
    }

    return (
        <div>
            <h1>What's your idea?</h1>
            {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
            <IdeaForm idea={idea} handleChange={handleChange} handleSubmit={handleSubmit}></IdeaForm>
        </div>

    )
}