import API from 'services/API';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
  const [movieData, setMovieData] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    try {
      API.getSingleMovie(id).then(response => {
        console.log('fetchSingleMovieResponse', response);
        const {
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = response.data;
        setMovieData({
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
    movieData;

  if (!movieData) {
    return;
  }

  return (
    <div>
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
    </div>
  );
};

export default SingleMoviePage;
