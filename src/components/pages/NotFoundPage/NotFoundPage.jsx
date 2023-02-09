import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <Link to="/">To Main page</Link>
    </div>
  );
};

export default NotFoundPage;
