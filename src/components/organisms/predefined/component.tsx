import { useGetMoviesDetailsById } from "../../../queries/fetchData";
import FeaturedMovieList from "../featuredMovieList/component";

function Predefined() {
  const predefinedMovieIds = ["tt1657507", "tt12451520"]; // Colombiana en New York
  const { data: movies, isSuccess } =
    useGetMoviesDetailsById(predefinedMovieIds);

  return <>{isSuccess && <FeaturedMovieList movies={movies} />}</>;
}

export default Predefined;
