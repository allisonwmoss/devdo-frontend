import React from 'react'
import OneComment from './OneComment'
export default function AllComments({ idea }) {
    console.log(idea.comments)
    return (
        <div>
            <h1>all comments</h1>
            {idea.comments.map(comment => {
                <OneComment comment={comment} idea={idea} />
            })}
        </div>
    )
}