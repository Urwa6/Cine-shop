import AsyncStorage from '@react-native-async-storage/async-storage';

const getCartKey = (userId) => `cart_${userId || 'guest'}`;

export async function loadCart(userId) {
  try {
    const savedCart = await AsyncStorage.getItem(getCartKey(userId));
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Unable to load cart:', error);
    return [];
  }
}

export async function saveCart(userId, items) {
  try {
    await AsyncStorage.setItem(
      getCartKey(userId),
      JSON.stringify(items)
    );
  } catch (error) {
    console.error('Unable to save cart:', error);
  }
}