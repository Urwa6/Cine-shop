
import { View, Text } from 'react-native';
import ScreenBackground from '../components/ScreenBackground';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Profile';

export default function Profile() {
  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Ionicons
          name="person-circle-outline"
          size={100}
          color="#B9A6FF"
        />

        <Text style={styles.title}>My Profile</Text>

        <Text style={styles.subtitle}>
          Welcome to your Cine-shop account
        </Text>
      </View>
    </ScreenBackground>
  );
}