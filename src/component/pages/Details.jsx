import {Button, Container} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import { movies } from "../movies";

export default function Details() {
    const params = useParams();
    const [movie, setMovie] = useState();
    let navigate = useNavigate();

    function getMovie() {
        const {id} = params;
        let movie = movies.find(item => item.id == id);
        setMovie(movie);
    }
    
    useEffect(() => {
        getMovie();
    }, [])

    return (
      
        <Container>
           <button onClick={() => navigate(-1)}>go back</button>
            <Row>
                <Col md={5}>
                    <img src={movie?.posterURL} alt="adf"/>
                </Col>
                <Col md={7}>
                    <h1>{movie?.title}</h1>
                    <div> {movie?.description}</div>
                    <div>Ratings: {movie?.rating}</div>
                    <Button href={movie?.video} target="_blank">Watch Now</Button>
                </Col>
            </Row>
        </Container>
        
    )
}