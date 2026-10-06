import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
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
});

export default styles;