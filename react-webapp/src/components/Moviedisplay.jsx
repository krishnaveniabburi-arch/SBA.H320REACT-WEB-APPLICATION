import React from "react";

export default function MovieDisplay({ movie }) {
    // function to return loaded jsx when data exists
    const loaded = () => {
        return (
            <div className="movie-container">
                <h2>{movie.Title}</h2>
                <h3>Released: {movie.Released}</h3>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://placeholder.com"} alt={movie.Title} />
                <p className="plot"><strong>plot:</strong>{movie.Plot}</p>
                <p><strong>IMDb Rating:</strong>{movie.imdbRating}</p>
            </div>
        );
    };


    // function to return fallback jsx when no movie is loaded 
    const unloaded = () => {
        return
        <p className="no-movie">No movie to display search for your favorite!</p>
    };
    return movie && movie.Response !== "False" ? loaded() : unloaded();
}
