import {Text,View, Image} from 'react-native';
import { useEffect, useState } from 'react';

import styles from '../styles/Detail';

import { getMovieDetails } from '../api/tmdb';


function calculatePrice(movie) {
    const rating = movie.vote_average;
    if (rating >= 8) {
        return 199; // SEK
    } 
    if (rating >= 7) {
        return 169; // SEK
    }
    return 129; // SEK
}

export default function Detail({ route }) {
    const { movieId } = route.params;

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function loadMovie() {

            try {
                const movieData = await getMovieDetails(movieId);
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        }

        loadMovie();
    }, [movieId]);

    return (
        <View style={styles.container}>
        <Text style={styles.title} >Movie Detail</Text>

        <Text>Movie ID: {movieId}</Text>
        {movie && (
            <View>
                <Image
                style={styles.poster}
                source={{ 
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }}
                />  
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text>Release Date: {movie.release_date}</Text>
                <Text>Rating: ⭐ {movie.vote_average.toFixed(1)}</Text>
                <Text style={styles.price}>Price: {calculatePrice(movie)} SEK
                </Text>
                <Text style={styles.overview}>{movie.overview}</Text>
            </View>
        )}  


        <Text style={styles.description} >
            Discover cast, crew, synopsis, and more. Dive deep into the world of cinema with Cine Shop!
        </Text>
        </View>
    );
    }