import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '0B0B12'
    },
    gradient: { 
        ...StyleSheet.absoluteFillObject,
    },
    glow: {
        position: 'absolute',
        top: 0,
        left:0,
        right:0,
        height:320,
    },
});
export default styles;