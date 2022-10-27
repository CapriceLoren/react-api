import logo from './logo.svg';
import './App.css';
import MovieInfo from "./MovieInfo"
import { useState, useEffect } from "react";

function App() {
  const [id, setId] = useState("");
  const handleClick = (e) => {
    if (e.target.id === "totoro"){
      setId("58611129-2dbc-4a81-a72f-77ddfc1b1b49")
    } else if (e.target.id === "kiki"){
        setId("ea660b10-85c4-4ae3-8a5f-41cea3648e3e")
    }
  };

  return (
    <div className="App"> 
      <nav>
        <button id="totoro" onClick={handleClick}>Totoro</button>
        <button id="kiki" onClick={handleClick}>Kiki</button>
      </nav>
      <MovieInfo movieId = {id} />
    
    </div> 
  );
}

export default App;
