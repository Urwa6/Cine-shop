import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B12',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitle: {
    color: '#9295A5',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 35,
  },

  input: {
    backgroundColor: '#1A1030',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#40305F',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 15,
    marginBottom: 16,
  },

  loginButton: {
    backgroundColor: '#8064D8',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerText: {
    color: '#9295A5',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 28,
  },
});

export default styles;