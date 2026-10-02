import { Text, View, Button } from 'react-native';
import styles from '../styles/Home';

export default function Home({ navigation}) {
    return (
        <View style={styles.container}>
        <Text style={styles.title} >Cine Shop</Text>

        <Text style={styles.subtitle} >Your favorite movies, all in one place!</Text>

        <Text style={styles.description} >
            Browse movies, explore details & add your favorites to your cart.
            Enjoy a seamless movie experience with Cine Shop!
        </Text>

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