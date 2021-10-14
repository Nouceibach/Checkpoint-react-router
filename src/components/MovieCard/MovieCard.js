

import './MovieCard.css'
import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../Rating/Rating'
import ModalAddMovie from '../AddMovie/AddMovie'
const MovieCard = ({movie,addCard,AddMovie}) => {
    return (
        <div>
            addCard 
            ?
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <ModalAddMovie addMovie={AddMovie}/>
            </Card.Body>
            </Card>
            :
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.img} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title >
                <Card.Text><Rating movieRating={movie.rating}/> </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard



