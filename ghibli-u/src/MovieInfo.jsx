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
    <div>
      <h3>Title: {movie.title}</h3>
      <h3>Original Title: {movie.original_title}</h3>
      <h4>Released: {movie.release_date}</h4>
      <h4>Director: {movie.director}</h4>
  <img src ={movie.image} />
    </div> 
  );
}

export default MovieInfo;