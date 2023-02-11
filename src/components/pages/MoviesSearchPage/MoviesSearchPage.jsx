import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import API from 'services/API';

import css from './MoviesSearchPage.module.css';

const MoviesPage = () => {
  const [state, setState] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  useEffect(() => {
    const onClickSearch = () => {
      try {
        API.getMoviesByQuery(search).then(response => {
          setState(response.data.results);
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (search) {
      onClickSearch();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  return (
    <div className={css.container}>
      <MovieSearchForm onSubmit={changeSearch} />
      {state.length > 0 && <MovieList items={state} />}
    </div>
  );
};

export default MoviesPage;
