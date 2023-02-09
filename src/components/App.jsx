import { Routes, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';

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
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};