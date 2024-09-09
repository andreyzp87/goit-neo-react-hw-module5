import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList movies={movies} state={location} />
    </div>
  );
};

export default HomePage;
