import { useParams, Link } from 'react-router-dom';
// import Cast from 'components/Cast/Cast';
export default function MovieDetails() {
  const { id } = useParams();
  //   const options = ['Cast', 'Reviews'];

  return (
    <div>
      <ul className="">
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}