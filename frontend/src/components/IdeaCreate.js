import React, { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { APIURL } from '../config'
import IdeaForm from './IdeaForm'
export default function IdeaCreate() {
    const initialIdeaState = {
        title: '',
        tags: [],
    }
    const [idea, setIdea] = useState(initialIdeaState)
    const [createdId, setCreatedId] = useState(null)
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        e.persist()
        setIdea({
            ...idea,
            poster_id: 1,
            [e.target.name]: e.target.value
        })
        console.log(idea)
    }

    // function getCookie(name) {
    //     // let cookieValue = null;
    //     // console.log(document.cookie)
    //     // if (document.cookie && document.cookie !== '') {
    //     //     const cookies = document.cookie.split(';');
    //     //     for (let i = 0; i < cookies.length; i++) {
    //     //         const cookie = cookies[i].trim();
    //     //         if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //     //             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //     //             break;
    //     //         }
    //     //     }
    //     // }
    //     // return cookieValue;
    // }
    // const csrftoken = getCookie('csrftoken');
    // const getCookie = () => {
    //     let cookieValue = null;
    //     if (localStorage.getItem('token') !== null) {
    //         cookieValue = localStorage.getItem('token')
    //         console.log('token is not null')
    //         return cookieValue
    //     } else {
    //         console.log('token is null')
    //         return cookieValue
    //     }
    // }

    // const csrftoken = getCookie()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(csrftoken)
        // const url = `${APIURL}/ideas/`
        const stuffToSend = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'X-CSRFToken': { csrftoken }
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(idea),
            // 'poster_id': 1

            credentials: 'include'
        }
        console.log(stuffToSend)
        fetch(`${APIURL}/ideas/`, stuffToSend
            // {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json; charset=UTF-8',
            //         // 'X-CSRFToken': { csrftoken }
            //         'Authorization': `Token ${localStorage.getItem('token')}`
            //     },
            //     body: JSON.stringify(idea),
            //     credentials: 'include'
            // }
        )
            .then(res => res.json())
            .then(data => {
                // setCreatedId(data._id)
                console.log(data)
            })
            .catch(() => {
                setError(true)
            })
    }
    // if (createdId) {
    //     return <Redirect to={`/ideas/${createdId}`} />
    // }

    return (
        <div>
            <h1>What's your idea?</h1>
            {error && <div className="alert alert-danger">Sorry, something went wrong. Please try again.</div>}
            <IdeaForm idea={idea} handleChange={handleChange} handleSubmit={handleSubmit}></IdeaForm>
        </div>

    )
}