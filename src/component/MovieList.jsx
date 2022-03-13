import React from 'react'
import MovieCard from './MovieCard'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import AddMovie from './AddMovie'
import {movies} from "./movies.js";


function MovieList() {
  const [movieList, setMovieList] = useState(movies)

  function handleAddMovie(movieValue){
    console.log(movieValue);
    setMovieList([...movieList, movieValue]);
  }

   return (
    <Container>
        <Row>
            {movieList.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
        </Row>
        <AddMovie addMovie={handleAddMovie} />
    </Container>
  )
}

export default MovieList
