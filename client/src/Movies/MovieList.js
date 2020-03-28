import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id}>
          <NavLink to={`movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} />
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
