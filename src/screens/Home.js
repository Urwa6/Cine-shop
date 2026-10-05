import { Text, FlatList, View, Button, Image, Pressable} from 'react-native';
import styles from '../styles/Home';

import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdb';

export default function Home({ navigation}) {
    const [movies, setMovies] = useState([]);
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
        <Text style={styles.title} >Cine Shop</Text>

        <Text style={styles.subtitle} >Your favorite movies, all in one place!</Text>

        <Text style={styles.description} >
            Browse movies, explore details & add your favorites to your cart.
            Enjoy a seamless movie experience with Cine Shop!
        </Text>

        <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <Pressable
             onPress={() => navigation.navigate('Detail', { movieId: item.id })}
            >
            <View>
                <Image
                style={styles.poster}
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
             }}
         />  
                <Text>{item.title}</Text>
                <Text>⭐ {item.vote_average.toFixed(1)}</Text>
            </View>
         </Pressable>
         )}
        />

        <Button
        title="Go to Movie Detail"
        onPress={() => navigation.navigate('Detail')}
        />
        
        <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
        />
        
        </View>
    );
    }