import { Text, View, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../styles/Cart';

export default function Cart() {
    const items = useSelector((state) => state.cart.items);

    const totalPrice = items.reduce((total, item) => 
        total + item.price, 0);
    return (
        <View style={styles.container}>
        <Text style={styles.title} >Your Cart</Text>

        <Text style={styles.description} >
            Review your selected movies and proceed to checkout.
        </Text>

        <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.cartItem}>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
             <View style ={styles.movieInfo}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.price}>Price: {item.price} SEK</Text>
            </View>
            </View>
         )}
        />
        <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>{totalPrice}</Text>
        </View>
        </View>
    );
}
       
     