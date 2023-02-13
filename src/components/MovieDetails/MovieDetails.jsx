import { useParams, Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Cast from 'components/Cast/Cast';
export default function MovieDetails() {
  const { id } = useParams();

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
      <Suspense fallback={<p>Wait! I'm loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
