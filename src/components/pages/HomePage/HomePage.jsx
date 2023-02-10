import Movies from 'components/Movies/Movies';

const HomePage = () => {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>{<Movies />}</ul>
    </div>
  );
};

export default HomePage;
