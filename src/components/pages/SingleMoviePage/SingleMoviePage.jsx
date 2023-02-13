import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import API from 'services/API';

import css from './SingleMoviePage.module.css';

import MovieDetails from 'components/MovieDetails/MovieDetails';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from || '/movies';

  useEffect(() => {
    try {
      API.getSingleMovie(id).then(response => {
        const {
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = response.data;
        setMovie({
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const { title, overview, poster_path, vote_average, genres, release_date } =
    movie;

  if (!movie) {
    return;
  }
  const goBack = () => navigate(from);

  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={goBack}>
        &#8592; Go back
      </button>
      <div className={css.container}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className={css.info}>
          <h2>{`${title} (${release_date})`}</h2>
          <p>{`User score: ${vote_average.toFixed(1)} out of 10`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => `${name} `)}</p>
        </div>
      </div>
      <p>Additional information</p>
      <MovieDetails />
    </div>
  );
};

export default SingleMoviePage;
