import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '9c395628f4600763367d246b976f93ea';

const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${KEY}`);
  return data;
};

const getMoviesByQuery = query => {
  const response = axios.get(`/search/movie?api_key=${KEY}&query=${query}`);
  return response;
};

const getSingleMovie = id => {
  const response = axios.get(`/movie/${id}?api_key=${KEY}`);

  return response;
};

const getCast = id => {
  const response = axios.get(`/movie/${id}/credits?api_key=${KEY}`);

  return response;
};

const getReview = id => {
  const response = axios.get(`/movie/${id}/reviews?api_key=${KEY}`);

  return response;
};

const API = {
  getTrendingMovies,
  getSingleMovie,
  getMoviesByQuery,
  getCast,
  getReview,
};

export default API;
