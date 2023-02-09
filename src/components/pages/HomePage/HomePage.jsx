import MoviesList from 'components/MovieList/MovieList';

const HomePage = () => {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>{<MoviesList />}</ul>
    </div>
  );
};

export default HomePage;
