import { Link } from 'react-router-dom';

const MovieList = ({ items }) => {
  const movieElements = items.map(({ id, title }) => (
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

export default MovieList;

MovieList.defaultProps = {
  items: [],
};
