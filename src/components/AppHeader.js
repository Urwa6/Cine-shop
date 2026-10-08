import {useState} from 'react';
import { Text, View , TextInput, Pressable, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../styles/Header';

export default function Header({onSearch}) {
    const [query, setQuery] = useState('');
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
                value={query}
                onChangeText={setQuery}
            />
            <Pressable style={styles.searchButton}
                onPress={() => onSearch(query)}
            >   
                <Ionicons name="search-outline" size={22} color="#fff" />
            </Pressable>
        
        </View>
        </View>
    );
}