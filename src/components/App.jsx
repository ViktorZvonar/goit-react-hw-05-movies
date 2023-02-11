import { Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import MoviesSearchPage from './pages/MoviesSearchPage/MoviesSearchPage';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import Cast from './Cast/Cast';
import Review from './Review/Review';

export const App = () => {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
