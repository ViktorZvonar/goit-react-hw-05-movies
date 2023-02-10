import { Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
import MoviesSearchPage from './pages/MoviesSearchPage/MoviesSearchPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import Cast from './Cast/Cast';
import Review from './Review/Review';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="/movies/:id/cast" element={<Cast />} />
        <Route path="/movies/:id/reviews" element={<Review />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
