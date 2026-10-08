import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    contentContainer: {
        alignItems: 'center',
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },  
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#999',
        lineHeight: 24,
    },
    poster: {
        width: 200,
        height: 300,
        borderRadius: 8,
        marginBottom: 12,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    overview: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        lineHeight: 22,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 12,
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
        backgroundColor: '#d32f2f',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 12,
        alignItems: 'center',
    },
    trailerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default styles;