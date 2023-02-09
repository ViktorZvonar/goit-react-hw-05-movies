import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
  const { id } = useParams();
  const options = ['Cast', 'Reviews'];

  return (
    <>
      <ul className="">
        {options.map((option, index) => {
          return (
            <li key={index}>
              <Link to={`/movies/${id}/${option}`}>{option}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
