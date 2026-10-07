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
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    movieCardPressed: {
     opacity: 0.85,
   },
    movieTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10,
        lineHeight: 21,
        minHeight: 42,
        textAlign: 'center',
        color: '#222',
    },
    rating: {
        fontSize: 13,
        color: '#666',
        marginTop: 6,
    },
    releaseDate: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: '#222',
        marginTop: 6,
    },          
    poster: {
        width: 100 + '%',
        height: 230,
        borderRadius: 18,
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