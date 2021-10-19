import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { APIURL } from '../config'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


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
        <Card>
            <CardBody>
                <CardTitle tag="h1">{idea.title}</CardTitle>
                <CardSubtitle tag="h3">posted on {idea.posted} by {idea.poster}</CardSubtitle>
                <CardSubtitle tag="h4">tags</CardSubtitle>
                <CardText>{idea.tags.map(tag => <div>#{tag}</div>)}</CardText>
                <CardSubtitle tag="h3">
                    As a user, I want to be able to...
                </CardSubtitle>
                <CardSubtitle tag="h3">
                    ...{idea.user_story}
                </CardSubtitle>
                {idea.in_progress ? <Button disabled="true">{idea.dev} is developing this idea</Button> : <Button>Develop this idea!</Button>}
            </CardBody>
        </Card>
    )
}