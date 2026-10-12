import { Text, View, Image, Button, ScrollView } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';

import ScreenBackground from '../components/ScreenBackground';
import styles from '../styles/Detail';
import {getMovieDetails,getMovieVideos,getMovieCredits,} from '../api/tmdb';
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
  const [addedToCart, setAddedToCart] = useState(false);
  const [cast, setCast] = useState([]);
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Reset the screen when a different movie is selected.
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });

    setMovie(null);
    setCast([]);
    setTrailerKey(null);
    setTrailerChecked(false);
    setAddedToCart(false);

    async function loadMovie() {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    async function loadCast() {
      try {
        const castData = await getMovieCredits(movieId);

        console.log('Cast data:', castData.length, castData);
        setCast(castData.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movie cast:', error);
        setCast([]);
      }
    }

    async function loadTrailer() {
      try {
        const videos = await getMovieVideos(movieId);
        const trailer =
          videos.find(
            video =>
              video.site === 'YouTube' &&
              video.type === 'Trailer' &&
              video.key &&
              video.official
          ) ||
          videos.find(
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
    loadMovie();
    loadCast();
    loadTrailer();
  }, [movieId]);

  return (
    <ScreenBackground>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Movie Detail</Text>

        {movie ? (
          <View style={styles.movieContent}>
            <Image
              style={styles.poster}
              source={{
                uri: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : undefined,
              }}
            />

            <Text style={styles.movieTitle}>{movie.title}</Text>

            <Text style={styles.overview}>
              Release Date: {movie.release_date || 'Unknown'}
            </Text>

            <Text style={styles.overview}>
              Rating: ⭐ {Number(movie.vote_average || 0).toFixed(1)}
            </Text>

            <Text style={styles.price}>
              Price: {calculatePrice(movie)} SEK
            </Text>

            <Text style={styles.overview}>
              {movie.overview || 'No description available.'}
            </Text>

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
              <Text style={styles.confirmation}>
                Added to cart!
              </Text>
            )}

            {/* Cast section */}
            <Text style={styles.sectionTitle}>Cast</Text>

            {cast.length > 0 ? (
              <ScrollView
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.castList}
              >
                {cast.map(actor => (
                  <View
                    key={actor.credit_id || actor.id}
                    style={styles.castCard}
                  >
                    {actor.profile_path ? (
                      <Image
                        style={styles.castPhoto}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w185${actor.profile_path}`,
                        }}
                      />
                    ) : (
                      <View style={styles.castPhotoPlaceholder}>
                        <Text style={styles.castPlaceholderText}>?</Text>
                      </View>
                    )}

                    <Text
                      style={styles.castName}
                      numberOfLines={2}
                    >
                      {actor.name}
                    </Text>

                    <Text
                      style={styles.castCharacter}
                      numberOfLines={2}
                    >
                      {actor.character || 'Unknown role'}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            ) : (
              <Text style={styles.overview}>
                Loading cast...
              </Text>
            )}

            {/* Trailer section */}
            <Text style={styles.sectionTitle}>Movie Trailer</Text>

            {trailerKey ? (
              <YoutubePlayer
                height={220}
                play={false}
                videoId={trailerKey}
                webViewProps={{
                  allowsFullscreenVideo: true,
                  mediaPlaybackRequiresUserAction: true,
                }}
              />
            ) : trailerChecked ? (
              <Text style={styles.overview}>
                No YouTube trailer was found for this movie.
              </Text>
            ) : (
              <Text style={styles.overview}>
                Loading trailer...
              </Text>
            )}
          </View>
        ) : (
          <Text style={styles.overview}>
            Loading movie details...
          </Text>
        )}

        <Text style={styles.description}>
          Discover cast, crew, synopsis, and more. Dive deep into the
          world of cinema with Cine Shop!
        </Text>
      </ScrollView>
    </ScreenBackground>
  );
}
