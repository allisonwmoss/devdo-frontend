import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { APIURL } from '../config'

export default function IdeaDetail({ match }) {
    const [deleted, setDeleted] = useState(false)
    const [error, setError] = useState(false)
    const [idea, setIdea] = useState(null)

    const onDeleteIdea = (e) => {
        const url = `${APIURL}/ideas/${match.params.id}`
        fetch(url, { method: 'DELETE' })
            .then(res => { setDeleted(true) })
            .catch(console.error)
    }

    useEffect(() => {
        const url = `${APIURL}/ideas/${match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setIdea(data))
            .catch(() => {
                setError(true)
            })
    }, [match.params.id])

    if (deleted) {
        return <Redirect to="/ideas"></Redirect>
    }
    if (error) {
        return (
            <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>
        )
    }
    if (!idea) {
        return (
            <div>loading, please wait</div>
        )
    }

    return (
        <h1>{idea.title}</h1>
    )
}