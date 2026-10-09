import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/ScreenBackground';

export default function ScreenBackground ({ children}){
    return(
        <View style={styles.container}>
           {/* Dark cinematic background */} 
            <LinearGradient
            colors={['#0B0B12', '#1A1030', '#2A0F1F']}
            start={{ x: 0, y: 0}}
            end={{ x: 1, y: 1}}
            style={StyleSheet.absoluteFill}
            />
            {/*Subtle red glow at the top */}
            <LinearGradient
            colors={['rgba(229, 9, 20, 0.25)', 'transparent']}
            start={{x: 0, y: 0}}
            end={{ x: 0, y: 1 }}
            style={styles.glow}
            pointerEvents="none"
            />
            {children}
            </View>
    );
}
