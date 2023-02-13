import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ items }) => {
  const location = useLocation();

  const movieElements = items.map(({ id, title }) => (
    <li key={id} title={title} id={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{movieElements}</ul>
    </div>
  );
};

export default MovieList;

MovieList.defaultProps = {
  items: [],
};
