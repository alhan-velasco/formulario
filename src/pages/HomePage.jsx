import React, { useState } from 'react';
import MovieForm from '../componets/molecules/MovieForm';
import MovieList from '../componets/organisms/MovieList';
import LinkedList from '../utils/LinkedList';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState(new LinkedList());

  const addMovie = (movie) => {
    const updatedMovies = new LinkedList();
    updatedMovies.head = movies.head; 
    updatedMovies.size = movies.size;  
    updatedMovies.add(movie);
    console.log('Películas actuales:', updatedMovies.toArray()); 
    setMovies(updatedMovies);
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