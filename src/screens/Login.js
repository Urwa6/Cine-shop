import { View, Text, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Login';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="film-outline"
        size={64}
        color="#B9A6FF"
      />

      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Text style={styles.subtitle}>
        Sign in to your Cine-shop account
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#9295A5"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9295A5"
        secureTextEntry
      />

      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.replace('MainTabs') }
      >
        <Text style={styles.loginButtonText}>
          Log In
        </Text>
      </Pressable>
      <Pressable
        style={styles.guestButton}
        onPress={() => navigation.replace('MainTabs')}
      >
       <Text style={styles.guestButtonText}>
         Continue as Guest
       </Text>
       </Pressable>

      <Text style={styles.footerText}>
        Your next movie night starts here.
      </Text>
    </View>
  );
}