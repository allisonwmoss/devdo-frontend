import React, { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Input } from 'reactstrap'
import { APIURL } from '../config'
import IdeaForm from './IdeaForm'
export default function IdeaEdit({ modal, setModal, toggle }) {
    const initialIdeaState = {
        title: '',
        tags: ''
    }
    const [idea, setIdea] = useState(initialIdeaState)
    const [createdId, setCreatedId] = useState(null)
    const [error, setError] = useState(false)

    const handleChange = (e) => {

        e.persist()
        setIdea({
            ...idea,
            [e.target.name]: e.target.value
        })
        console.log(idea)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = `${APIURL}/ideas/`
        const stuffToSend = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(idea),
            credentials: 'include'
        }
        console.log(stuffToSend)
        fetch(url, stuffToSend
        )
            .then(res => res.json())
            .then(data => {
                setCreatedId(data.id)
            })
            .then(data => toggle())
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
            <IdeaForm idea={idea} handleChange={handleChange} handleSubmit={handleSubmit}
            ></IdeaForm>
        </div>

    )
}