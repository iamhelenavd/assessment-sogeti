import Card, {
  MovieDetailsComponentProps,
} from "../../molecules/card/component";
import styles from "./styles.module.css";

type FeaturedMovieListProps = {
  movies: Array<MovieDetailsComponentProps | undefined>;
};

function FeaturedMovieList(props: FeaturedMovieListProps) {
  const { movies } = props;

  return (
    <ul className={styles.list}>
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
  );
}

export default FeaturedMovieList;
