import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { APIURL } from '../config'
import { Redirect } from 'react-router-dom'

export default function IdeaForm({ idea, handleSubmit, handleChange }) {
    console.log(`idea at idea form: ${idea.title}`)
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">What's your idea?</Label>
                <Input type="text" name="title" id="title" placeholder="Spectacular App Name" value={idea.title} onChange={handleChange} required></Input>
            </FormGroup>
            <FormGroup>
                <Label for="user_story">As a user of this app, I want to...</Label>
                <Input type="text" name="user_story" id="user_story" placeholder="...share, view, and comment on my friends' posts." value={idea.user_story} onChange={handleChange} required></Input>
            </FormGroup>

            {/* <FormGroup check>
                <legend>tags:</legend>
                <Label check>
                    <Input type="checkbox" name="tags" value="artificial intelligence (AI)" onChange={onChangeAi} />{' '}
                    artificial intelligence(AI)
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="e-commerce" />{' '}
                    e-commerce
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="gig economy" />{' '}
                    gig economy
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="government/law" />{' '}
                    government/law
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="health" />{' '}
                    health
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="sharing economy" />{' '}
                    sharing economy
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="social justice" />{' '}
                    social justice
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="social media" />{' '}
                    social media
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="utility/other" />{' '}
                    utility/other
                </Label>
                <Label check>
                    <Input type="checkbox" name="tags" value="virtual reality (VR)" />{' '}
                    virtual reality (VR)
                </Label>
            </FormGroup> */}
            <Button className="my-2">submit idea</Button>
        </Form>
    )
}
// }

//what do i want here?
    //I want a button somewhere on the page that opens a modal
    //and i want that modal to contain the form