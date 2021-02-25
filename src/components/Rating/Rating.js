import React from 'react';
import { Rate } from 'antd';
import ReactStars from 'react-stars'
import './Rating.css'


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rater = ({ filterRate, movieRating, rating, setRating }) => {

  // const [value, setValue] = useState(1);


  const handleChange = value => {
    // setValue(value);
    setRating(value)
  };

  return (
    <span className="ratingContent">
      {filterRate ?
        <ReactStars tooltips={desc} onChange={handleChange} value={rating} />
        :
        <ReactStars value={movieRating} disabled className="movieRating" />
      }
    </span>
  );
}

export default Rater