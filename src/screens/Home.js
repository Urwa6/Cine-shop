import { Text, FlatList, View, Button, Image, Pressable, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';
import styles from '../styles/Home';

import { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '../api/tmdb';

export default function Home({ navigation}) {
    const [movies, setMovies] = useState([]);
    const handleSearch = async (query) => {
        if (query.trim() === '') {
            // If the search query is empty, fetch popular movies again
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
            return;
        }

        try {
            const searchResults = await searchMovies(query);
            setMovies(searchResults);
        } catch (error) {
            console.error('Error searching for movies:', error);
        }
    }
    useEffect(() => {
        async function loadMovies() {
            try {
                const movies = await getPopularMovies();
                setMovies(movies);
                console.log('Popular Movies:', movies);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        }

        loadMovies();
    }, []);
    return (
        <View style={styles.container}>
            <AppHeader onSearch={handleSearch} />
            {movies.length > 0 && (
  <Pressable
    style={styles.hero}
    onPress={() =>
      navigation.navigate('Detail', { movieId: movies[0].id })
    }
  >
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w780${movies[0].backdrop_path}`,
      }}
      style={styles.heroImage}
      imageStyle={styles.heroImageStyle}
    >
      <View style={styles.heroOverlay}>
        <Text style={styles.heroLabel}>FEATURED MOVIE</Text>

        <Text style={styles.heroTitle}>
          {movies[0].title}
        </Text>

        <Text style={styles.heroRating}>
          ⭐ {movies[0].vote_average.toFixed(1)}
        </Text>

        <Text style={styles.heroButton}>
          Explore Movie
        </Text>
      </View>
    </ImageBackground>
  </Pressable>
)}

<View style={styles.sectionHeader}>
  <Text style={styles.sectionTitle}>Popular Movies</Text>

  <Text style={styles.seeAll}>See All</Text>
</View>

        <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row} 
        contentContainerStyle={styles.movieList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
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
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
             }}
         />  
                <Text style={styles.movieTitle} numberOfLines={2}>
                    {item.title}
                </Text>
                <Text style={styles.rating}>⭐ {item.vote_average.toFixed(1)}</Text>
                <Text style={styles.releaseDate}>Release: {item.release_date}</Text>
                <Text style={styles.price}>{item.vote_average >= 8
                 ? '199 SEK': item.vote_average >= 7
                 ? '169 SEK': '129 SEK'}
                </Text>
            </View>
         </Pressable>
         )}
        />

        <Button
        title="Go to Movie Detail"
        onPress={() => {
            if (movies.length > 0) {
                navigation.navigate('Detail', { 
                    movieId: movies[0].id,
                });
           }
         }}
           
        />
        
        <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
        />
        
        </View>
    );
    }