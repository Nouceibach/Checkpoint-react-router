import React,{useState}from 'react'
import './Rating.css'
import ReactStars from 'react-stars';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating=({movieRating})=>  {
    const [value, setValue] = useState(3)  
    const handleChange = value => {
        setValue(value)
    }
    return(
    <div> 
    <span className="ratingContent">
        <ReactStars tooltips={desc} onChange={handleChange} value={value} />
    </span>
    </div> 
    )
    
}
export default Rating

