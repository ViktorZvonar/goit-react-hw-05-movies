import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';

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
    <li key={index}>
      {profile_path && (
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
      )}
      <p>{name}</p>
      <p>{`Character: ${character}`}</p>
    </li>
  ));
  return <ul>{castElements}</ul>;
};

export default Cast;
