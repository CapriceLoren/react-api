import logo from './logo.svg';
import './App.css';
import MovieInfo from "./MovieInfo"
import Home from "./Home"
import { useState, useEffect } from "react";

function App() {

  const [id, setId] = useState("");
  const homeDiv = document.querySelector(".homeDiv")
  const handleClick = (e) => {
    const homeDiv = document.querySelector(".homeDiv")
    let movieDiv = document.querySelector(".movieDiv")
    let button = document.querySelector("button")

    movieDiv.classList.remove("hide")
    homeDiv.classList.add("hide")
    // e.target.classList.add('selected')
    
    if (e.target.id === "totoro"){
      setId("58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    } else if (e.target.id === "kiki"){
      setId("ea660b10-85c4-4ae3-8a5f-41cea3648e3e")
    } else if (e.target.id === "ponyo"){
      setId("758bf02e-3122-46e0-884e-67cf83df1786")
    } else if (e.target.id === "home"){
      homeDiv.classList.remove("hide")
      movieDiv.classList.add("hide")
    }
}

  return (
    <div className="App"> 
      <nav>
        <button id="home" onClick={handleClick}>Home</button>
        <button id="totoro" onClick={handleClick}>Totoro</button>
        <button id="kiki" onClick={handleClick}>Kiki</button>
        <button id="ponyo" onClick={handleClick}>Ponyo</button>
      </nav>
      <MovieInfo movieId = {id} />
      <Home />
    </div> 
  );
}

export default App;
