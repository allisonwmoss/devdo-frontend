import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { APIURL } from '../config'
import { Redirect } from 'react-router-dom'

export default function IdeaForm({ idea, handleSubmit, handleChange }) {
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="title">What's your idea?</Label>
                <Input type="text" name="title" id="title" placeholder="describe this app in a few words" value={idea.title} onChange={handleChange} required></Input>
            </FormGroup>
            <FormGroup>
                <Label for="userstory">As a user of this app, I want to...</Label>
                <Input type="text" name="userstory" id="userstory" placeholder="...share, view, and comment on my friends' posts." value={idea.user_story} onChange={handleChange} required></Input>
            </FormGroup>
            <FormGroup check value={idea.tags} onChange={handleChange}>
                <legend>tags:</legend>
                <Label check>
                    <Input type="checkbox" />{' '}
                    artificial intelligence(AI)
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    e-commerce
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    gig economy
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    government/law
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    health
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    sharing economy
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    social justice
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    social media
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    utility/other
                </Label>
                <Label check>
                    <Input type="checkbox" />{' '}
                    virtual reality (VR)
                </Label>
            </FormGroup>
            <Button>submit idea</Button>
        </Form>
    )

}