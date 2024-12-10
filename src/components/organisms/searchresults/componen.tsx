import { useSearch } from "@tanstack/react-router";
import {
  useGetMoviesByTitle,
  useGetMoviesDetailsById,
} from "../../../queries/fetchData";
import Card from "../../molecules/card/component";
import ThreeDotsWave from "../../../utils/animations/motion/threeDotsWave";

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
      {detailedMoviesLoading && (
        <div className="movie-list">
          <ThreeDotsWave />
          <h1 className="errorMessage">Loading..</h1>
        </div>
      )}
      {isError && (
        <div className="movie-list">
          <ThreeDotsWave />
          <h1 className="errorMessage">No Matches found</h1>
        </div>
      )}
      {!detailedMoviesLoading && isSuccess && (
        <ul className="movie-list">
          {detailedMovies.map(
            (movie) =>
              movie && (
                <li key={movie.imdbID}>
                  <Card
                    poster={movie.poster}
                    title={movie.title}
                    released={movie.released}
                    type={movie.type}
                    year={movie.year}
                    ratings={movie.ratings}
                    genre={movie.genre}
                    director={movie.director}
                    actors={movie.actors}
                    plot={movie.plot}
                    awards={movie.awards}
                  />
                </li>
              ),
          )}
        </ul>
      )}
    </>
  );
}

export default SearchResults;
