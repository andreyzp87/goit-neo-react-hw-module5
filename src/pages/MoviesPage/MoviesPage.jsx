import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../api/tmdb';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsErrorLoading(false);

    const query = searchParams.get('query') ?? '';
    const page = searchParams.get('page') ?? 1;

    getMovies(query, page)
      .then(data => setMovies(data.results))
      .catch(() => setIsErrorLoading(true))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isErrorLoading && <ErrorMessage />}
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} state={location} />}
    </div>
  );
};
export default MoviesPage;
