import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 30,
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
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 12,
    },

    trailer: {
        height: 240,
        width: '100%',
        backgroundColor: '#000000',
        marginBottom: 20,
    },

    castList: {
        paddingVertical: 8,
        paddingRight: 8,
    },

    castCard: {
        width: 100,
        marginRight: 14,
        alignItems: 'center',
    },

    castPhoto: {
       width: 88,
       height: 88,
       borderRadius: 44,
       backgroundColor: '#242430',
       marginBottom: 8,
    },

    castPhotoPlaceholder: {
       width: 88,
       height: 88,
       borderRadius: 44,
       backgroundColor: '#242430',
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 8,
},

castPlaceholderText: {
  color: '#A1A1AE',
  fontSize: 24,
  fontWeight: '700',
},

castName: {
  color: '#FFFFFF',
  fontSize: 13,
  fontWeight: '600',
  textAlign: 'center',
  marginBottom: 4,
},

castCharacter: {
  color: '#A1A1AE',
  fontSize: 12,
  textAlign: 'center',
},

});

export default styles;