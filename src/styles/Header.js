import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },

  logo: {
    width: 150,
    height: 75,
    resizeMode: 'contain',  
    alignSelf: 'flex-start',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 6,
    marginTop: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },
  searchButton: {
  width: 38,
  height: 38,
  borderRadius: 19,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#222',
},

searchButtonText: {
  fontSize: 22,
  color: '#fff',
},
});

export default styles;