import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

function MovieCard(props){
    const movie= props.movie;

    console.log(props, movie);
  return (
    <Col className="m-3">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterURL} />
            <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
                {movie.description}
                <br />
                Rating: {movie.rating}
            </Card.Text>
            <Button href = {movie.video} variant="primary">WATCH NOW</Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default MovieCard
