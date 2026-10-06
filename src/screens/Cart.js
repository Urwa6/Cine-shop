import { Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../styles/Cart';

export default function Cart() {
    const items = useSelector((state) => state.cart.items);
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
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.price}>Price: {item.price} SEK</Text>
            </View>
         )}
        />
        </View>
    );
}   
     