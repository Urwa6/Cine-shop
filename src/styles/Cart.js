import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        padding: 24,            
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        color: '#333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#999',
        lineHeight: 24,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        padding: 12,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 6,
    },
    movieInfo: {
        marginLeft: 12,
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    price: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        padding: 12,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },  
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantityButton: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        borderRadius: 4,
    },
    quantityButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: '600',
    },
    removeButton: {
        marginTop: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#FF3B30',
        borderRadius: 4,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default styles;