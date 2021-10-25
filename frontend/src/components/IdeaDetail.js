import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { APIURL } from '../config'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ModalExample from './Modal';
import AllComments from './AllComments';

export default function IdeaDetail({ match }) {
    const [deleted, setDeleted] = useState(false)
    const [error, setError] = useState(false)
    const [idea, setIdea] = useState(null)

    // const onDeleteIdea = (e) => {
    //     const url = `${APIURL}/ideas/${match.params.id}`
    //     fetch(url, { method: 'DELETE' })
    //         .then(res => { setDeleted(true) })
    //         .catch(console.error)
    // }

    useEffect(() => {
        const url = `${APIURL}/ideas/${match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setIdea(data))
            .catch(() => {
                setError(true)
            })
    }, [match.params.id])

    // if (deleted) {
    //     return <Redirect to="/ideas"></Redirect>
    // }
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

    const developIdea = (e) => {
        e.preventDefault()
        const url = `${APIURL}/ideas/${match.params.id}`
        const stuffToSend = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ ...idea, 'in_progress': true }),
            credentials: 'include'
        }
        console.log(stuffToSend)
        fetch(url, stuffToSend
        )
            .then(res => res.json())
            // .then(data => {
            //     setCreatedId(data.id)
            // })
            // .then(data => toggle())
            .catch(() => {
                setError(true)
            })
    }

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h1" className="purpletext bold my-3">{idea.title}</CardTitle>
                <CardSubtitle className="purpletext my-3" tag="h5">posted on {idea.posted} by {idea.poster}</CardSubtitle>
                <CardText>{idea.tags.map(tag => <Button className="mx-2 my-2" id="modal-btn">#{tag}</Button>)}</CardText>
                <CardSubtitle className="purpletext my-3" tag="h3">
                    As a user, I want to be able to...
                </CardSubtitle>
                <CardSubtitle className="purpletext" tag="h3">
                    ...{idea.user_story}
                </CardSubtitle>
                {idea.in_progress ? <Button disabled="true" className="my-5">someone is developing this idea</Button> : <a href={`mailto:${idea.poster_email}`}><Button className="my-5" onClick={developIdea}>Develop this idea!</Button></a>}
                {/* <ModalExample buttonLabel="Edit this idea" action="edit" idea={idea}></ModalExample> */}
                {/* <AllComments idea={idea} /> */}
            </CardBody>
        </Card>
    )
}