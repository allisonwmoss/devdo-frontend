import React from 'react'
import { Link } from 'react-router-dom'

export default function IdeaThumb({ idea }) {
    console.log(idea)
    const url = `/ideas/${idea.id}`
    return (
        <div>
            <Link to={url}>
                <div>
                    <h3>{idea.title}</h3>
                </div>
            </Link>
            {idea.tags.map(tag => (
                <div>{tag}</div>
            ))}
        </div>

    )
}