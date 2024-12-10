import { useGetMoviesDetailsById } from "../../../queries/fetchData";
import Card from "../../molecules/card/component";

function Predefined() {
  const predefinedMovieIds = ["tt1659343", "tt1133985"]; // Colombiana en New York
  const { data: movies, isSuccess } =
    useGetMoviesDetailsById(predefinedMovieIds);

  return (
    <>
      {isSuccess && (
        <ul className="movie-list">
          {movies.map(
            (movie) =>
              movie && (
                <li key={movie.imdbID}>
                  <Card
                    title={movie.title}
                    year={movie.year}
                    awards={movie.awards}
                    poster={movie.poster}
                    plot={movie.plot}
                  />
                </li>
              ),
          )}
        </ul>
      )}
    </>
  );
}

export default Predefined;
