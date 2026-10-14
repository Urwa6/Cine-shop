import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 16,

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 6,
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8,
        color: '#fff',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#A8ADBD',
        lineHeight: 21,
        marginBottom: 20,
    },
    movieList: {
        paddingBottom: 24,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    movieCard: {
        width: '48%',
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: 16,
        padding: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.10)',
        overflow: 'hidden',
    
     
    },
    movieCardPressed: {
     opacity: 0.85,
     transform: [{ scale: 0.98 }],
   },
    movieTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10,
        lineHeight: 21,
        minHeight: 42,
        textAlign: 'center',
        color: '#fff',
    },
    rating: {
        fontSize: 13,
        color: '#B9A6FF',
        marginTop: 6,
    },
    releaseDate: {
        fontSize: 12,
        color: '#A8ADBD',
        marginTop: 4,
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FF5A65',
        marginTop: 6,
    },          
    poster: {
        width: '100%',
        height: 230,
        borderRadius: 10,
    },
    hero: {
        width: '100%',
        height: 280,
        marginTop: 18,
        marginBottom: 24,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth:1,
        borderColor: 'rgba(255,255,255,0.10)',
        backgroundColor:'#10121D',  
    },

     heroImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },

     heroImageStyle: {
        borderRadius: 20,
    },

    heroOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.48)',
    },

    heroLabel: {
        alignSelf: 'flex-start',
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 1.4,
        color: '#fff',
        backgroundColor: '#8064D8',
        paddingHorizontal: 12,
        paddingVertical:6,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 10,
      },

    heroTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
      },

    heroRating: {
       fontSize: 14,
       fontWeight: '800',
       color: '#fff',
       marginBottom: 14,
      },

    heroButton: {
       alignSelf: 'flex-start',
       backgroundColor: '#8064D8',
       color: '#fff',
       paddingHorizontal: 18,
       paddingVertical: 11,
       borderRadius: 24,
       overflow: 'hidden',
       fontSize: 14,
       fontWeight: '700',
      },
    sectionHeader: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 14,
       marginTop: 4,
      },

    sectionTitle: {
       fontSize: 22,
       fontWeight: '800',
       color: '#fff',
      },

    seeAll: {
       fontSize: 14,
       fontWeight: '600',
       color: '#B9A6FF',
      },
    noResults: {
      color: '#A8A8BC',
      fontSize: 15,
      textAlign: 'center',
      marginVertical: 24,
},
});

export default styles;