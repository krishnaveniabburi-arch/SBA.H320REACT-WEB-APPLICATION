import React, {useState, useEffect} from "react";
import logo from "./assets/hero.png";
import "./App.css";
import MovieDisplay from "./components/Moviedisplay";
import Form from "./components/Form";

export default function App() {
  

  const [movie, setMovie] = useState(null);
// function to fectch movie data from OMDB API
  const getMovie = async (searchTerm) => {
    try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
     );
    const data = await response.json();
    setMovie(data);
  } catch (error) {
    console.error("AJAX Request Failed");
  }
};

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
    <h1>popcornTime Movie search</h1>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

