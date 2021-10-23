import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Input } from 'reactstrap'
import { APIURL } from '../config'
import IdeaForm from './IdeaForm'

export default function IdeaEdit({ modal, setModal, toggle, idea }) {
    console.log(`idea at idea edit: ${idea.title}`)
    const [editIdea, setEditIdea] = useState(null)
    const [createdId, setCreatedId] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const url = `${APIURL}/ideas/${idea.id}`
        console.log(`idea at idea edit inside useEffect: ${idea.title}`)
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
            .then(data => {
                setEditIdea({
                    data
                })
            })
            .catch(() => {
                setError(true)
            })
    }, [idea.id])

    const handleChange = (e) => {
        e.persist()
        setEditIdea({
            ...editIdea,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = `${APIURL}/ideas/${idea.id}`
        const stuffToSend = {
            method: 'PUT',
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
        return <Redirect to={`/ideas`} />
    }

    return (
        <div>
            {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
            <IdeaForm idea={editIdea} handleChange={handleChange} handleSubmit={handleSubmit}
            ></IdeaForm>
        </div>

    )
}