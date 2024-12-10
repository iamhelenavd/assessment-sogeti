import { useSearch } from "@tanstack/react-router";
import {
  useGetMoviesByTitle,
  useGetMoviesDetailsById,
} from "../../../queries/fetchData";
import MovieList from "../movieList/component";
import ErrorMessage from "../../molecules/errorMessage/component";

function SearchResults() {
  // returns all seach params in the url (after '?').
  const searchParams = useSearch({ strict: false });

  const { data: movies, isError } = useGetMoviesByTitle(
    searchParams.search ?? "",
  );
  const {
    data: detailedMovies,
    isLoading: detailedMoviesLoading,
    isSuccess,
  } = useGetMoviesDetailsById(
    movies?.map((movie) => movie.imdbID),
    searchParams.plotSize,
  );

  return (
    <>
      <ErrorMessage isError={isError} isLoading={detailedMoviesLoading} />
      {!detailedMoviesLoading && isSuccess && (
        <MovieList movies={detailedMovies ?? []} />
      )}
    </>
  );
}

export default SearchResults;
