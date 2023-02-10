import { useState, useEffect } from 'react';
import API from 'services/API';

import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      API.getTrendingMovies().then(response => {
        setMovies(response.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setMovies]);

  return <div>{movies.length > 0 && <MovieList items={movies} />}</div>;
};

export default Movies;
