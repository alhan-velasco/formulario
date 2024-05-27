import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './MovieForm.css';

const MovieForm = ({ onAddMovie }) => {
  const [nombre, setNombre] = useState('');
  const [director, setDirector] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { nombre, director, fecha };
    console.log('Datos de la nueva película:', newMovie);
    onAddMovie(newMovie);
    setNombre('');
    setDirector('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <Input label="Nombre de la Película" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <Input label="Director" type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
      <Input label="Fecha en que la vio" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <Button type="submit">Agregar Película</Button>
    </form>
  );
};

export default MovieForm;