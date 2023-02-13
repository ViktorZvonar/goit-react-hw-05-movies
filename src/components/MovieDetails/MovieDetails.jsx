import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <ul className="">
        <li>
          <Link
            state={{ from: location.state?.from }}
            to={`/movies/${id}/cast`}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            state={{ from: location.state?.from }}
            to={`/movies/${id}/reviews`}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<p>Wait! I'm loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
