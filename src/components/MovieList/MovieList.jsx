import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from 'services/API';

const MoviesList = () => {
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

  const movieElements = movies.map(({ id, title }) => (
    <li key={id} title={title} id={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{movieElements}</ul>
    </div>
  );
};

export default MoviesList;
