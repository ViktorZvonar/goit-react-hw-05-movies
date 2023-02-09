import API from 'services/API';
import { Link } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';

// import Cast from 'components/Cast/Cast';
// import Review from 'components/Review/Review';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
  const [movieData, setMovieData] = useState(0);
  const { id } = useParams();
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
      <Link to="/">
        <button type="button">Go back</button>
      </Link>

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
      {/* <Cast />
      <Review /> */}
    </div>
  );
};

export default SingleMoviePage;
