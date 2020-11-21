import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
        {movies.map(movie => {
            return (<div><h3>Title: {movie.title}</h3><p>Run Time: {movie.time}</p> <ul> Movie Genres:{ movie.genres.map( g =>  {return  <li>{g}</li>}) } </ul> </div>)
        })}
    </div>
  );
};

export default Movies;
