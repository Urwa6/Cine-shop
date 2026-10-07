import { Text, View , TextInput, Pressable, Image } from 'react-native';
import styles from '../styles/Header';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image 
             source={require('../../assets/Logo.png')}
             style={styles.logo} 
             />
        
        
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search for movies..."
                placeholderTextColor="#999"
            />
            <Pressable style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
            </Pressable>
        
        </View>
        </View>
    );
}