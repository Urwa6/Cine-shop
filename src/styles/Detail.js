import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    contentContainer: {
        paddingBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#222',
    },  
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#999',
        lineHeight: 22,
        marginTop: 30,
    },
    poster: {
        width: 200,
        height: 300,
        borderRadius: 14,
        marginBottom: 18,
    },
    movieTitle: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
        color: '#222',
    },
    overview: {
        fontSize: 16,
        textAlign: 'left',
        color: '#666',
        lineHeight: 24,
        marginBottom: 18,
    },
    price: {
        fontSize: 20,
        fontWeight: '700',
        color: '#222',
        marginBottom: 14,
    },
    confirmation: {
        fontSize: 16,
        color: 'green',
        marginTop: 10,
        fontWeight: '600',
    },
    trailer: {
        width: '100%',
        height: 220,
        marginTop: 16,
        borderRadius: 12,
        overflow: 'hidden',
},
    trailerButton: {
        width: '100%',
        backgroundColor: '#d32f2f',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 8,
        alignItems: 'center',
    },
    trailerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    genreContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 18,
    },
   genreTag: {
       backgroundColor: '#f1f1f1',
       paddingHorizontal: 12,
       paddingVertical: 7,
       borderRadius: 20,
       margin: 4,
    },

   genreText: {
      fontSize: 13,
      fontWeight: '600',
      color: '#555',
},
});

export default styles;