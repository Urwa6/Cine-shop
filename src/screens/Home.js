
import {Text,FlatList,View,Image,Pressable,ImageBackground, Dimensions,} from 'react-native';
import { useEffect, useRef, useState } from 'react';

import ScreenBackground from '../components/ScreenBackground';
import AppHeader from '../components/AppHeader';
import styles from '../styles/Home';
import { getPopularMovies, searchMovies } from '../api/tmdb';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HORIZONTAL_PADDING = 16;
const FEATURED_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2;

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);

  const featuredListRef = useRef(null);

  const featuredMovies = movies
    .filter((movie) => movie.backdrop_path)
    .slice(0, 5);

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setIsSearching(false);
        setActiveFeaturedIndex(0);
        featuredListRef.current?.scrollToOffset({
          offset: 0,
          animated: false,
        });
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }

      return;
    }

    try {
      const results = await searchMovies(query);
      setMovies(results);
      setIsSearching(true);
      setActiveFeaturedIndex(0);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  useEffect(() => {
    async function loadMovies() {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    loadMovies();
  }, []);

  const renderFeaturedMovie = ({ item }) => (
    <Pressable
      style={[
        styles.hero,
        {
          width: FEATURED_WIDTH,
          marginRight: 0,
          marginTop: 18,
          marginBottom: 0,
        },
      ]}
      onPress={() =>
        navigation.navigate('Detail', { movieId: item.id })
      }
    >
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
        }}
        style={styles.heroImage}
        imageStyle={styles.heroImageStyle}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.heroLabel}>FEATURED MOVIE</Text>

          <Text style={styles.heroTitle} numberOfLines={2}>
            {item.title}
          </Text>

          <Text style={styles.heroRating}>
            ⭐ {item.vote_average.toFixed(1)}
          </Text>

          <Text style={styles.heroButton}>Explore Movie</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );

  const renderMovie = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.movieCard,
        pressed && styles.movieCardPressed,
      ]}
      onPress={() =>
        navigation.navigate('Detail', { movieId: item.id })
      }
    >
      <View>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />

        <Text style={styles.movieTitle} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.rating}>
          ⭐ {item.vote_average.toFixed(1)}
        </Text>

        <Text style={styles.releaseDate}>
          Release: {item.release_date || 'Unknown'}
        </Text>

        <Text style={styles.price}>
          {item.vote_average >= 8
            ? '199 SEK'
            : item.vote_average >= 7
              ? '169 SEK'
              : '129 SEK'}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <ScreenBackground>
      <View style={[styles.container, { flex: 1 }]}>
        <FlatList
          style={{ flex: 1 }}
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.movieList}
          showsVerticalScrollIndicator={false}
          renderItem={renderMovie}
          ListHeaderComponent={
            <View>
              <AppHeader onSearch={handleSearch} />

              {!isSearching && featuredMovies.length > 0 && (
                <View>
                  <FlatList
                    ref={featuredListRef}
                    horizontal
                    pagingEnabled
                    data={featuredMovies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderFeaturedMovie}
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled
                    getItemLayout={(_, index) => ({
                      length: FEATURED_WIDTH,
                      offset: FEATURED_WIDTH * index,
                      index,
                    })}
                    onMomentumScrollEnd={(event) => {
                      const index = Math.round(
                        event.nativeEvent.contentOffset.x /
                          FEATURED_WIDTH
                      );

                      setActiveFeaturedIndex(index);
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 12,
                      marginBottom: 20,
                    }}
                  >
                    {featuredMovies.map((movie, index) => (
                      <Pressable
                        key={movie.id}
                        accessibilityRole="button"
                        accessibilityLabel={`Featured movie ${index + 1}`}
                        onPress={() => {
                          setActiveFeaturedIndex(index);
                          featuredListRef.current?.scrollToIndex({
                            index,
                            animated: true,
                          });
                        }}
                        style={{
                          width:
                            activeFeaturedIndex === index ? 20 : 7,
                          height: 7,
                          borderRadius: 5,
                          backgroundColor:
                            activeFeaturedIndex === index
                              ? '#F20D32'
                              : '#666879',
                        }}
                      />
                    ))}
                  </View>
                </View>
              )}

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  {isSearching ? 'Search Results' : 'Popular Movies'}
                </Text>
              </View>

              {isSearching && movies.length === 0 && (
                <Text style={styles.noResults}>
                  No movies found.
                </Text>
              )}
            </View>
          }
        />
      </View>
    </ScreenBackground>
  );
}
