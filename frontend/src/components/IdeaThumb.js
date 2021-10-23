import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function IdeaThumb({ idea }) {
    const url = `/ideas/${idea.id}`
    return (

        <Card className="my-2">
            <CardBody className="thumb">
                <Link to={url} className="no-underline">
                    <h2 className="transparent thumb">{idea.title}</h2>
                    {/* <CardTitle tag="h3" className="thumb">{idea.title}</CardTitle> */}
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