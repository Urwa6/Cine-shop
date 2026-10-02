import { Text, View} from 'react-native';
import styles from '../styles/Cart';

export default function Cart() {
    return (
        <View style={styles.container}>
        <Text style={styles.title} >Your Cart</Text>

        <Text style={styles.description} >
            Review your selected movies and proceed to checkout.
        </Text>
        </View>
    );
    }