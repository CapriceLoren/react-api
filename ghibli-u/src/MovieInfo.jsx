import { useState, useEffect } from "react";
import './App.css';

function MovieInfo(props) {
const [movie, setMovie] = useState("");

useEffect(() => {
  fetch(`https://ghibliapi.herokuapp.com/films/${props.movieId}`, {
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      setMovie(res)
      console.log(res)})
}, [props.movieId] )

  return (
    <div className="movieDiv hide">
      <div className="movieImg">
        <img src ={movie.image} />
      </div>
      <div className="infoDiv">
        <h3>Title: {movie.title}</h3>
        <h4>Director: {movie.director}</h4>
        <h4>Original Title: {movie.original_title}</h4>
        <h4>Released: {movie.release_date}</h4>
        <h4>Description: {movie.description}</h4>
      </div>
    </div> 
  );
}

export default MovieInfo;