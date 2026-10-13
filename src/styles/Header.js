import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  logo: {
    width: 155,
    height: 70,
    resizeMode: 'contain',  
    alignSelf: 'flex-start',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 52,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 14,
    paddingLeft: 16,
    paddingRight: 6,
    marginTop: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#fff',
    paddingVertical: 0,
  },
  searchButton: {
  width: 40,
  height: 40,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#8064D8',
},

searchButtonText: {
  fontSize: 22,
  color: '#fff',
},
});

export default styles;