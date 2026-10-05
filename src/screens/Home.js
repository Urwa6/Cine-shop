import { Text, FlatList, View, Button } from 'react-native';
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
            <View>
                <Text>{item.title}</Text>
            </View>
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