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
});

export default styles;