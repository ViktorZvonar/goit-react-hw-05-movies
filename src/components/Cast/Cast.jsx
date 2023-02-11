import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      API.getCast(id).then(response => {
        setCast(response.data.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const castElements = cast.map(({ name, profile_path, character }, index) => (
    <li className={css.wrapper} key={index}>
      {profile_path && (
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
      )}
      <p className={css.text}>{name}</p>
      <p className={css.text}>{`Character: ${character}`}</p>
    </li>
  ));
  return <ul className={css.list}>{castElements}</ul>;
};

export default Cast;
