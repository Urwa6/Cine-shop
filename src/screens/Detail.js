import {Text,View, Image, Button,Pressable,ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {WebView} from 'react-native-webview';

import styles from '../styles/Detail';

import { getMovieDetails, getMovieVideos } from '../api/tmdb';
import { addToCart } from '../store/cartSlice';


function calculatePrice(movie) {
    const rating = movie.vote_average;
    if (rating >= 8) {
        return 199; 
    } 
    if (rating >= 7) {
        return 169; 
    }
    return 129; 
}

export default function Detail({ route }) {
    const { movieId } = route.params;

    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);
    //Add movie to the cart using redux dispatch
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        async function loadMovie() {

            try {
                const movieData = await getMovieDetails(movieId);
                const videos = await getMovieVideos(movieId);
                const trailer = videos.find(video => 
                    video.type === 'Trailer'&& 
                    video.site === 'YouTube'&&
                    video.official === true
                );
                setTrailer(trailer)

                console.log('Movie videos:', videos);
                console.log('Movie trailer:', trailer);
                
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        }

        loadMovie();
    }, [movieId]);

    return (
        <ScrollView
         style={styles.container}
         contentContainerStyle={styles.contentContainer}
         showsVerticalScrollIndicator={false}
         nestedScrollEnabled
         >

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
                <Button
                title="Add to Cart"
                onPress={() => {
                    dispatch(
                        addToCart({
                        id: movie.id,
                        title: movie.title,
                        price: calculatePrice(movie),
                        poster_path: movie.poster_path,
                    }));
                    setAddedToCart(true);
                }}
                />
                {trailer && (
                  <Pressable 
                    style={styles.trailerButton}
                    onPress={() => setShowTrailer(true)}
           >
                 <Text style={styles.trailerButtonText}>
                  ▶ Watch Trailer
                 </Text>
                  </Pressable>
     )}
                {showTrailer && trailer && (
                    <WebView
                        source={{ uri: `https://www.youtube.com/embed/${trailer.key}` 
                        }}
                        style={styles.trailer}
                        allowsFullScreenVideo
                        nestedScrollEnabled
                    />
                )}
              
               
        
        
                {addedToCart && <Text style={styles.confirmation}>
                    Added to cart!</Text>}
            </View>
        )}
        
        <Text style={styles.description} >
            Discover cast, crew, synopsis, and more. Dive deep into the world of cinema with Cine Shop!
        </Text>
        </ScrollView>
    );
    }