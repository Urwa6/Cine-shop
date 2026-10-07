import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 16,

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 6,
        color: '#222',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8,
        color: '#555',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#777',
        lineHeight: 21,
        marginBottom: 20,
    },
    movieList: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    movieCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 4,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
        color: '#333',
    },
    rating: {
        fontSize: 14,
        color: '#222',
        marginTop: 4,
    },
    releaseDate: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007AFF',
        marginTop: 6,
    },          
    poster: {
        width: 150,
        height: 240,
        borderRadius: 8,
    },
    hero: {
  width: '100%',
  height: 260,
  marginTop: 16,
  marginBottom: 24,
  borderRadius: 16,
  overflow: 'hidden',
},

heroImage: {
  flex: 1,
  justifyContent: 'flex-end',
},

heroImageStyle: {
  borderRadius: 16,
},

heroOverlay: {
  flex: 1,
  justifyContent: 'flex-end',
  padding: 20,
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
},

heroLabel: {
  fontSize: 12,
  fontWeight: '700',
  letterSpacing: 1.5,
  color: '#e8c88a',
  marginBottom: 6,
},

heroTitle: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 6,
},

heroRating: {
  fontSize: 14,
  color: '#fff',
  marginBottom: 12,
},

heroButton: {
  alignSelf: 'flex-start',
  backgroundColor: '#fff',
  color: '#222',
  paddingHorizontal: 16,
  paddingVertical: 9,
  borderRadius: 20,
  fontSize: 14,
  fontWeight: '600',
},
sectionHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 14,
},

sectionTitle: {
  fontSize: 22,
  fontWeight: '700',
  color: '#222',
},

seeAll: {
  fontSize: 14,
  fontWeight: '600',
  color: '#777',
},
});

export default styles;