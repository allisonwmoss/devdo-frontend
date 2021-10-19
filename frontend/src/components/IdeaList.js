import React, { useEffect, useState } from 'react'
import { APIURL } from '../config'
import IdeaThumb from './IdeaThumb'

export default function IdeaList() {
    const [ideas, setIdeas] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const url = `${APIURL}/ideas`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setIdeas(data)
            })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                setError(true)
            })
    }, [url])
    if (error) {
        return (
            <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>
        )
    }
    if (loading) {
        return (
            <div>loading, please wait</div>
        )
    }
    return (
        <div className="container">
            {ideas.map(idea => (
                <div key={idea._id}>
                    <IdeaThumb idea={idea} />
                </div>
            ))}
        </div>
    )
}