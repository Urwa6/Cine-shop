import {Text,View,Image,ScrollView,Dimensions,ActivityIndicator,Pressable,} from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import { LinearGradient } from 'expo-linear-gradient';

import ScreenBackground from '../components/ScreenBackground';
import styles from '../styles/Detail';

import {getMovieDetails,getMovieVideos,getMovieCredits,} from '../api/tmdb';
import { addToCart } from '../store/cartSlice';

const { height: screenHeight } = Dimensions.get('window');
const HERO_HEIGHT = screenHeight * 0.58;

function calculatePrice(movie) {
  const rating = movie.vote_average;

  if (rating >= 8) return 199;
  if (rating >= 7) return 169;

  return 129;
}

export default function Detail({ route }) {
  const { movieId } = route.params;

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);

  const [movieLoading, setMovieLoading] = useState(true);
  const [castLoading, setCastLoading] = useState(true);
  const [trailerLoading, setTrailerLoading] = useState(true);

  const [movieError, setMovieError] = useState(false);
  const [trailerError, setTrailerError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    let isActive = true;

    scrollViewRef.current?.scrollTo({
      y: 0,
      animated: false,
    });

    setMovie(null);
    setCast([]);
    setTrailerKey(null);

    setMovieLoading(true);
    setCastLoading(true);
    setTrailerLoading(true);

    setMovieError(false);
    setTrailerError(false);
    setAddedToCart(false);

    async function loadMovie() {
      try {
        const data = await getMovieDetails(movieId);

        if (isActive) {
          setMovie(data);
        }
      } catch (error) {
        console.error('Error loading movie:', error);

        if (isActive) {
          setMovieError(true);
        }
      } finally {
        if (isActive) {
          setMovieLoading(false);
        }
      }
    }

    async function loadCast() {
      try {
        const data = await getMovieCredits(movieId);

        if (isActive) {
          setCast(data.slice(0, 10));
        }
      } catch (error) {
        console.error('Error loading cast:', error);

        if (isActive) {
          setCast([]);
        }
      } finally {
        if (isActive) {
          setCastLoading(false);
        }
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
              video.official &&
              video.key
          ) ||
          videos.find(
            video =>
              video.site === 'YouTube' &&
              video.type === 'Trailer' &&
              video.key
          ) ||
          videos.find(
            video =>
              video.site === 'YouTube' &&
              video.type === 'Teaser' &&
              video.key
          );

        if (isActive) {
          setTrailerKey(trailer?.key ?? null);
        }
      } catch (error) {
        console.error('Error loading trailer:', error);

        if (isActive) {
          setTrailerError(true);
        }
      } finally {
        if (isActive) {
          setTrailerLoading(false);
        }
      }
    }

    loadMovie();
    loadCast();
    loadTrailer();

    return () => {
      isActive = false;
    };
  }, [movieId]);

  function handleAddToCart() {
    if (!movie) return;

    dispatch(
      addToCart({
        id: movie.id,
        title: movie.title,
        price: calculatePrice(movie),
        poster_path: movie.poster_path,
      })
    );

    setAddedToCart(true);
  }

  if (movieLoading) {
    return (
      <ScreenBackground>
        <View style={styles.loadingScreen}>
          <ActivityIndicator
            size="large"
            color={styles.loadingIndicator.color}
          />
          <Text style={styles.loadingText}>
            Loading movie details...
          </Text>
        </View>
      </ScreenBackground>
    );
  }

  if (movieError || !movie) {
    return (
      <ScreenBackground>
        <View style={styles.loadingScreen}>
          <Text style={styles.overview}>
            Unable to load this movie. Please try again.
          </Text>
        </View>
      </ScreenBackground>
    );
  }

  return (
    <ScreenBackground>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.hero}>
      
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
              }}
              style= {styles.heroBackdrop}
              resizeMode='cover'
              blurRadius={18}
            />
            <View style= {styles.heroBackdropTint} />
          <View style={styles.heroPosterContainer}>
          <Image
           source={{
           uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
              style={styles.heroPoster}
              resizeMode="contain"
            />
           </View>

          <LinearGradient
            colors={styles.heroGradientColors}
            locations={[0.25, 0.65, 1]}
            style={styles.heroOverlay}
            pointerEvents='none'
          />

          <View style={styles.heroInfo}>
            <Text style={styles.movieTitle}>
              {movie.title}
            </Text>
            {movie.genres?.length > 0 &&(
              <Text style={styles.genre}>
                {movie.genres.map((genre) => genre.name).join(' • ')}
              </Text>
            )}

            <Text style={styles.heroRating}>
              {'⭐ '}
              {Number(movie.vote_average || 0).toFixed(1)}
              {'  •  '}
              {movie.release_date?.slice(0, 4) || 'Unknown year'}
            </Text>
          </View>
        </View>

        <View style={styles.movieContent}>
          <Text style={styles.price}>
            {calculatePrice(movie)} SEK
          </Text>

          <Text style={styles.overview}>
            Release Date: {movie.release_date || 'Unknown'}
          </Text>

          <Text style={styles.sectionTitle}>
            Synopsis
          </Text>

          <Text style={styles.overview}>
            {movie.overview || 'No description available.'}
          </Text>

    
          <Pressable
            style={styles.cartButton}
            onPress={handleAddToCart}
            accessibilityRole="button"
          >
            <Text style={styles.cartButtonText}>
              Add to Cart
            </Text>
          </Pressable>

          {addedToCart && (
            <Text style={styles.confirmation}>
              Added to cart!
            </Text>
          )}

          <Text style={styles.sectionTitle}>
            Cast
          </Text>

          {castLoading ? (
            <ActivityIndicator
              size="small"
              color={styles.loadingIndicator.color}
            />
          ) : cast.length > 0 ? (
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
                      resizeMode="cover"
                    />
                  ) : (
                    <View style={styles.castPhotoPlaceholder}>
                      <Text style={styles.castPlaceholderText}>
                        ?
                      </Text>
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
              Cast information is unavailable.
            </Text>
          )}

  
          <Text style={styles.sectionTitle}>
            Movie Trailer
          </Text>

          {trailerLoading ? (
            <View style={styles.trailerMessage}>
              <ActivityIndicator
                size="small"
                color={styles.loadingIndicator.color}
              />
              <Text style={styles.trailerMessageText}>
                Loading trailer...
              </Text>
            </View>
          ) : trailerKey ? (
            <View style={styles.trailerContainer}>
              <YoutubePlayer
                height={220}
                play={false}
                videoId={trailerKey}
                webViewProps={{
                  allowsFullscreenVideo: true,
                  mediaPlaybackRequiresUserAction: true,
                }}
              />
            </View>
          ) : (
            <Text style={styles.overview}>
              {trailerError
                ? 'Unable to load trailer information. Please try again later.'
                : 'No YouTube trailer was found for this movie.'}
            </Text>
          )}
        </View>

        <Text style={styles.description}>
          Discover cast, synopsis, and trailers. Dive deeper
          into the world of cinema with Cine Shop!
        </Text>
      </ScrollView>
    </ScreenBackground>
  );
}