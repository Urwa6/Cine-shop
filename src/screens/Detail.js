
import { Text, View, Image, Button, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { WebView } from 'react-native-webview';

import ScreenBackground from '../components/ScreenBackground';
import styles from '../styles/Detail';
import { getMovieDetails, getMovieVideos } from '../api/tmdb';
import { addToCart } from '../store/cartSlice';

function calculatePrice(movie) {
  const rating = movie.vote_average;

  if (rating >= 8) return 199;
  if (rating >= 7) return 169;
  return 129;
}

export default function Detail({ route }) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [trailerChecked, setTrailerChecked] = useState(false);
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    async function loadTrailer() {
      try {
        const videos = await getMovieVideos(movieId);
        console.log('TMDb videos:', videos);

        const trailer = videos.find(
          video =>
            video.site === 'YouTube' &&
            video.type === 'Trailer' &&
            video.key &&
            video.official
        ) || videos.find(
          video =>
            video.site === 'YouTube' &&
            video.type === 'Trailer' &&
            video.key
        );

        setTrailerKey(trailer?.key ?? null);
      } catch (error) {
        console.error('Error fetching trailer:', error);
        setTrailerKey(null);
      } finally {
        setTrailerChecked(true);
      }
    }

    setTrailerKey(null);
    setTrailerChecked(false);
    loadMovie();
    loadTrailer();
  }, [movieId]);

  return (
    <ScreenBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Movie Detail</Text>
        <Text style={styles.movieTitle}>Movie ID: {movieId}</Text>

        {movie && (
          <View>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
            />

            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.overview}>
              Release Date: {movie.release_date || 'Unknown'}
            </Text>
            <Text style={styles.overview}>
              Rating: ⭐ {movie.vote_average.toFixed(1)}
            </Text>
            <Text style={styles.price}>
              Price: {calculatePrice(movie)} SEK
            </Text>
            <Text style={styles.overview}>{movie.overview}</Text>

            <Button
              title="Add to Cart"
              onPress={() => {
                dispatch(
                  addToCart({
                    id: movie.id,
                    title: movie.title,
                    price: calculatePrice(movie),
                    poster_path: movie.poster_path,
                  })
                );
                setAddedToCart(true);
              }}
            />

            {addedToCart && (
              <Text style={styles.confirmation}>Added to cart!</Text>
            )}

            <Text style={styles.sectionTitle}>Movie Trailer</Text>

            {trailerKey ? (
              <WebView
                source={{
                  uri: `https://www.youtube.com/embed/${trailerKey}`,
                }}
                style={styles.trailer}
                javaScriptEnabled
                domStorageEnabled
                allowsFullscreenVideo
                mediaPlaybackRequiresUserAction
              />
            ) : trailerChecked ? (
              <Text style={styles.overview}>
                No YouTube trailer was found for this movie.
              </Text>
            ) : (
              <Text style={styles.overview}>Loading trailer...</Text>
            )}
          </View>
        )}

        <Text style={styles.description}>
          Discover cast, crew, synopsis, and more. Dive deep into the world of
          cinema with Cine Shop!
        </Text>
      </ScrollView>
    </ScreenBackground>
  );
}
