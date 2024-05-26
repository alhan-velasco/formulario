import React, { useState } from 'react';
import MovieForm from '../componets/molecules/MovieForm';
import MovieList from '../componets/organisms/MovieList';
import LinkedList from '../utils/LinkedList';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState(new LinkedList());

  const addMovie = (movie) => {
    movies.add(movie);
    setMovies(new LinkedList(movies));
  };

  return (
    <div className="home-page">
      <h1>Gestión de Películas Vistas</h1>
      <MovieForm onAddMovie={addMovie} />
      <MovieList movies={movies.toArray()} />
    </div>
  );
};

export default HomePage;
