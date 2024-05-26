import React from 'react';
import './MovieList.css';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <div className="movie-card" key={index}>
        <h3>{movie.nombre}</h3>
        <p>Director: {movie.director}</p>
        <p>Fecha: {movie.fecha}</p>
      </div>
    ))}
  </div>
);

export default MovieList;
