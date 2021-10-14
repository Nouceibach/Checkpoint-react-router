import React,{useState} from 'react'
import { FilterByName } from './FilterByName/FilterByName'
import Footer from './Footer/Footer'
import Rating from './Rating/Rating'
import movieData from './MoviesData'
import MovieList from './MovieList/MovieList'

const MovieApp = () => {
    const [movies, setMovies] = useState(movieData)
    const [inputSearch,setinputSearch]=useState("")
    const [rating,setRating]=useState(1)
    const AddMovie=(newMovie)=>{
        setMovies([...movies,newMovie])
    }
    return (
        <div>
            <h1>Movie App</h1>
            <div style={{display:"flex"}}>
            <FilterByName inputSearch={inputSearch} setinputSearch={setinputSearch}/>
            <Rating rating={rating} setRating={setRating}/>
            </div>
            <MovieList movies={movies} inputSearch={inputSearch} rating={rating} addMovie={AddMovie}/> 
            <Footer/>
        </div>
    )
}

export default MovieApp
