import React from 'react'
import IdeaCreate from './IdeaCreate'

export default function OneComment({ comment, idea }) {
    return (
        <div>
            <h1>comment</h1>
            <h1>{comment.body}</h1>
            <h2>{idea.title}</h2>
        </div>

    )
}