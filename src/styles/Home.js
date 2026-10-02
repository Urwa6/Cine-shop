import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:24,
        backgroundColor: '#f5f5f5',

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 12,
        color: '#666',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#999',
        lineHeight: 24,
    },
});

export default styles;