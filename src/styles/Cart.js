import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
        paddingTop: 24,
        paddingBottom: 30,         
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff',
    },
    description: {
        fontSize: 14,
        color: '#A8A8BC',
        lineHeight: 22,
        marginBottom: 22,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.10)',
        borderRadius: 14,
    },
    poster: {
        width: 90,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#20202C',
    },
    movieInfo: {
        flex: 1,
        marginLeft: 14,
        justifyContent: 'center',
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        color: '#B9A6FF',
        fontWeight: '600',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 75,
        padding: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.10)',
        borderRadius: 50,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B9A6FF',
    },  
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    quantityButton: {
        width: 34,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8064D8',
        borderRadius: 10,
    },
    quantityButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quantity: {
        marginHorizontal: 14,
        fontSize: 16,
        fontWeight: '600',
        color:'#fff'
    },
    removeButton: {
        alignSelf:'flex-start',
        marginTop: 12,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 90, 101, 0.12)',
        borderWidth: 1,
        borderColor: 'rgba(255, 90, 101, 0.35)',
        borderRadius: 8,
    },
    removeButtonText: {
        color: '#FF5A65',
        fontSize: 13,
        fontWeight: '600',
    },
    list: {
        flex: 1,
    },
});

export default styles;