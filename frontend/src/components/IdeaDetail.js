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

    console.log(idea)

    return (
        <div>
            <h1>{idea.title}</h1>
            <p>posted {idea.posted} by {idea.poster} </p>
            <div>tags: {idea.tags.map(tag => (
                <p>#{tag}</p>
            ))}</div>
            <h2>As a user, I want to be able to...</h2>
            <p>{idea.user_story}</p>
            <h2>{idea.in_progress ? <p>{idea.dev} is developing this idea</p> : <p>develop this idea!</p>}</h2>
        </div>

    )
}