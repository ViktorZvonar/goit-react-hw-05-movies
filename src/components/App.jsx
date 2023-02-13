import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Menu = lazy(() => import('./Menu/Menu'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('./pages/MoviesSearchPage/MoviesSearchPage')
);
const SingleMoviePage = lazy(() =>
  import('./pages/SingleMoviePage/SingleMoviePage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Wait! I'm loading...</p>}>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesSearchPage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
