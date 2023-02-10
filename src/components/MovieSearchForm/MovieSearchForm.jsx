import { useState } from 'react';

import PropTypes from 'prop-types';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
