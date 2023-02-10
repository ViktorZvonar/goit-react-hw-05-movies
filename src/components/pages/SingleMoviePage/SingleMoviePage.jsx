import MovieDetails from 'components/MovieDetails/MovieDetails';

import API from 'services/API';

import { useParams, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

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
  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{`${title} (${release_date})`}</h2>
          <p>{`User score: ${(vote_average * 10).toFixed()}%`}</p>
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
