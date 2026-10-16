import { useState,useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { Ionicons } from '@expo/vector-icons';
import ScreenBackground from '../components/ScreenBackground';
import styles from '../styles/Profile';

export default function Profile({ navigation }) {
  const [error, setError] = useState('');

  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return unsubscribe;
   }, []);
  const handleLogout = async () => {
   try {
    setError('');
    await signOut(auth);
    navigation.getParent()?.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
   } catch (err) {
    setError('Unable to log out. Please try again.');
  }
  };

 

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
         {user
          ? `Welcome, ${user.displayName || user.email}!`
          : 'You are browsing as a guest'}
        </Text>

        {user ? (
          <Text style={styles.subtitle}>
            {user.email}
          </Text>
        ) : null}

        {error ? (
          <Text style={styles.subtitle}>{error}</Text>
        ) : null}

        {user ? (
          <Pressable
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>
              Log Out
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.logoutButton}
            onPress={() =>
              navigation.getParent()?.navigate('Login')
            }
          >
            <Text style={styles.logoutButtonText}>
              Log In
            </Text>
          </Pressable>
        )}
      </View>
    </ScreenBackground>
  );
}
