import {Text,View} from 'react-native';
import styles from '../styles/Detail';

export default function Detail() {
    return (
        <View style={styles.container}>
        <Text style={styles.title} >Movie Detail</Text>

        <Text style={styles.description} >
            Discover cast, crew, synopsis, and more. Dive deep into the world of cinema with Cine Shop!
        </Text>
        </View>
    );
    }