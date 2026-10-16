import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Login';

export default function Login({ navigation }) {
  //Store the email and password  entered by the user 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Choose between logging in and creating an account
  const [isRegistering, setIsRegistering] = useState(false);

  // Store error messages and loading status
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAuth = async () => {
  setError('');

  if (!email.trim() || !password) {
    setError('Please enter your email and password.');
    return;
  }

  setLoading(true);

  try {
    if (isRegistering) {
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
    } else {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
    }

    navigation.replace('MainTabs');
  } catch (err) {
    if (err.code === 'auth/invalid-credential') {
      setError('Incorrect email or password.');
    } else if (err.code === 'auth/email-already-in-use') {
      setError('This email is already registered.');
    } else if (err.code === 'auth/weak-password') {
      setError('Password must be at least 6 characters.');
    } else if (err.code === 'auth/invalid-email') {
      setError('Please enter a valid email address.');
    } else {
      setError('Something went wrong. Please try again.');
    }
  } finally {
    setLoading(false);
  }
};
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
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9295A5"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.loginButton}
        onPress={handleAuth}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>
          {loading
          ?'Please wait...'
          : isRegistering
            ?'Create Account'
            :'Log In'}
        </Text>
      </Pressable>
      {error ? (
  <Text style={styles.footerText}>
    {error}
  </Text>
) : null}

   <Pressable
    onPress={() => {
    setIsRegistering(!isRegistering);
    setError('');
   }} 
   >
   <Text style={styles.footerText}>
    {isRegistering
      ? 'Already have an account? Log In'
      : 'New here? Create an Account'}
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