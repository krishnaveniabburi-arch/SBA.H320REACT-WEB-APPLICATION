import {useState, useEffect} from "react";
import logo from "./assets/hero.png";
import Form from "./components/Moviedisplay";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
     );
    const data = await response.json();
    setMovie(data);
  } catch (error) {
    console.error("AJAX Request Failed");
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
    <h1>popcornTime Movie search</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

