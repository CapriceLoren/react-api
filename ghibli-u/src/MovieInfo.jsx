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
        <p>Director: {movie.director}</p>
        <p>Original Title: {movie.original_title}</p>
        <p>Released: {movie.release_date}</p>
        <p>Description: {movie.description}</p>
      </div>
    </div> 
  );
}

export default MovieInfo;