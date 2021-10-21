import React, { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Input } from 'reactstrap'
import { APIURL } from '../config'
import IdeaForm from './IdeaForm'
export default function IdeaCreate({ modal, setModal, toggle }) {
    // const initialTagState = {
    //     'artificial intelligence(AI)': false,
    //     'e-commerce': false,
    //     'gig economy': false,
    //     'government/law': false,
    //     'health': false,
    //     'sharing economy': false,
    //     'social justice': false,
    //     'social media': false,
    //     'utility/other': false,
    //     'virtual reality (VR)': false,
    // }
    // const [tags, setTags] = useState(initialTagState)
    const initialIdeaState = {
        title: '',
        tags: ''
        // tags: tags
    }
    const [idea, setIdea] = useState(initialIdeaState)
    const [createdId, setCreatedId] = useState(null)
    const [error, setError] = useState(false)

    // const onChangeAi = () => {
    //     setTags({ ...tags, 'artificial intelligence(AI)': !'artificial intelligence(AI)' })
    // }

    // const onChangeEcom = () => {
    //     setTags({ ...tags, 'e-commerce': !'e-commerce' })
    // }


    // const handleChangeTags = (e) => {

    // console.log(e.target)
    // const isChecked = e.target.checked
    // if (isChecked) {
    //     let newTagArr = [...tags, e.target.value]
    //     console.log('box was checked')
    //     console.log(`new tag arr: ${newTagArr}`)
    //     setTags(newTagArr)
    // } else {
    //     let removedTagArr = tags.filter(item => item !== e.target.value)
    //     setTags(removedTagArr)
    // }
    // handleChange(e)
    // }
    const handleChange = (e) => {

        e.persist()
        setIdea({
            ...idea,
            [e.target.name]: e.target.value
        })
        console.log(idea)
    }
    // const handleChangeTags = (e) => {
    //     const isChecked = e.target.checked
    //     let newTagArr = tags
    //     if (isChecked) {
    //         newTagArr.push(e.target.value)
    //         setTags(newTagArr)
    //     } else {
    //         const index = tags.indexOf(e.target.value)
    //         newTagArr.splice(index, 1)
    //         setTags(newTagArr)
    //     }
    // }
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
            // handleChangeTags={handleChangeTags} 
            // onChangeAi={onChangeAi}
            ></IdeaForm>
        </div>

    )
}

//what do I need to do?
    //I need to set up an event listener that will update the tags list when boxes are checked 