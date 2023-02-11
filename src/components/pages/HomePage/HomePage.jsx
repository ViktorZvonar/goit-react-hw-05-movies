import Movies from 'components/Movies/Movies';

import css from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <ul>{<Movies />}</ul>
    </div>
  );
};

export default HomePage;
