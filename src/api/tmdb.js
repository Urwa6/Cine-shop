const TMDB_API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;

export async function getPopularMovies() {
  console.log("TMDB key loaded:", Boolean(TMDB_API_KEY));

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  console.log("TMDB status:", response.status);

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(movieId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
    );
    if (!response.ok) {
        throw new Error(`TMDB request failed: ${response.status}`);
    }
    const data = await response.json();
    return data;
}