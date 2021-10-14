
import './MovieList.css'
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies,inputSearch,AddMovie}) => {
    return (
        <div className='movieList'>
            {movies
            .filter(movie=>movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
            .map(movie=><MovieCard movie={movie} key={movie.id} addCard={false}/>)} 
            <MovieCard addCard={true} addMovie={AddMovie}/> 
        </div>
    )
}

export default MovieList


