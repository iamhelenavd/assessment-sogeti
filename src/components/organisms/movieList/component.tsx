import Card, {
  MovieDetailsComponentProps,
} from "../../molecules/card/component";
import styles from "./styles.module.css";

type MovieListProps = {
  movies: Array<MovieDetailsComponentProps | undefined>;
};

function MovieList(props: MovieListProps) {
  const { movies } = props;
  return (
    <ul className={styles.list}>
      {movies.map(
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
  );
}

export default MovieList;
