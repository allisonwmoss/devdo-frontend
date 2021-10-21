import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function IdeaThumb({ idea }) {
    const url = `/ideas/${idea.id}`
    return (

        <Card>
            <CardBody>
                <Link to={url}>
                    <CardTitle tag="h3">{idea.title}</CardTitle>
                </Link>
                {idea.tags.map(tag => (
                    <Link to={`/ideas/${tag}`}>
                        <Button>{tag}</Button>
                    </Link>
                ))}
            </CardBody>
        </Card>


        // <div>
        //     <Link to={url}>
        //         <div>
        //             <h3>{idea.title}</h3>
        //         </div>
        //     </Link>
        //     {idea.tags.map(tag => (
        //         <div>{tag}</div>
        //     ))}
        // </div>

    )
}