import { QueryClient, useQueries, useQuery } from "@tanstack/react-query";

export interface MovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface MovieDetailsData {
  Title: string;
  Year: string;
  Ratings: Array<{ Value: string }>;
  Type: string;
  Released: string;
  Actors: string;
  Director: string;
  imdbID: string;
  Plot: string;
  Awards: string;
  Poster: string;
  Genre: string;
}

const apiKey = "6c3a2d45";
export const queryClient = new QueryClient();

// Search movies by title
export const fetchMoviesByTitle = async (
  title: string,
): Promise<MovieData[]> => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`,
    );

    if (!response.ok) {
      throw new Error("failed to fetch movies by title");
    }

    const data = await response.json();

    return data.Search;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred: ${error.message}`);
    }
    throw error
  }
};

// Fetch movies set on ID
export const fetchMovieDetailsById = async (
  id: string,
  plot: string,
): Promise<MovieDetailsData> => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=${plot}`,
  );
  if (!response.ok) {
    throw new Error("Fout bij ophalen van filmdetails");
  }
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};

// Hook pulls a list of movies based on their title:
export const useGetMoviesByTitle = (title: string, limit = 5) => {
  return useQuery<MovieData[]>({
    queryKey: ["movies", title],
    queryFn: () => fetchMoviesByTitle(title),
    select: (data) => data.slice(0, limit),
    enabled: !!title.length,
  });
};

// Hook for movie details (depending on selected ID)
export const useGetMoviesDetailsById = (
  ids: Array<string> | undefined = [],
  plot: string = "full",
) => {
  return useQueries({
    queries: ids?.map((id) => ({
      queryKey: ["movie", id, plot],
      queryFn: () => fetchMovieDetailsById(id, plot),
      enabled: !!ids.length,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data && movieMapper(result.data)),
        isPending: results.some((result) => result.isPending),
        isLoading: results.some((result) => result.isLoading),
        isSuccess: results.some((result) => result.isSuccess),
      };
    },
  });
};

// Convert capital letters to lowercase and apply mappings
type MovieDetails = {
  released?: string;
  title: string;
  year: string;
  ratings?: Array<{ value: string }>;
  type?: string;
  actors?: Array<string>;
  director?: string;
  plot?: string;
  awards: string;
  poster?: string;
  genre?: Array<string>;
  imdbID: string;
};

function movieMapper(movie: MovieDetailsData): MovieDetails {
  return {
    title: movie.Title,
    year: movie.Year,
    ratings: movie.Ratings.map((rating) => ({ value: rating.Value })),
    type: movie.Type,
    released: movie.Released,
    actors: movie.Actors.split(", "),
    director: movie.Director,
    imdbID: movie.imdbID,
    plot: movie.Plot,
    awards: movie.Awards,
    poster: movie.Poster,
    genre: movie.Genre.split(", "),
  };
}
