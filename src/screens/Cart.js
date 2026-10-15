import {Text,View,FlatList,Image,Pressable,} from 'react-native';
import ScreenBackground from '../components/ScreenBackground';
import { useDispatch, useSelector } from 'react-redux';
import {increaseQuantity,decreaseQuantity,removeFromCart} from '../store/cartSlice';
import styles from '../styles/Cart';

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items)
  console.log('Cart items:', items);


  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


  const renderProductImage = (item) => {
  const imageUri =
    item.image ||
    (item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : null);

  if (!imageUri) {
    return <View style={styles.posterPlaceholder} />;
  }

  return (
    <Image
      style={styles.poster}
      source={{ uri: imageUri }}
      resizeMode="contain"
    />
  );
};

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>

        <Text style={styles.description}>
          Review your selected movies and proceed to checkout.
        </Text>

        <FlatList
          style={styles.list}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              {renderProductImage(item)}

              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>
                  {item.title}
                </Text>

                <Text style={styles.price}>
                  Price: {item.price} SEK
                </Text>

                <View style={styles.quantityContainer}>
                  <Pressable
                    style={styles.quantityButton}
                    onPress={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    <Text style={styles.quantityButtonText}>
                      -
                    </Text>
                  </Pressable>

                  <Text style={styles.quantity}>
                    {item.quantity}
                  </Text>

                  <Pressable
                    style={styles.quantityButton}
                    onPress={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    <Text style={styles.quantityButtonText}>
                      +
                    </Text>
                  </Pressable>
                </View>

                <Pressable
                  style={styles.removeButton}
                  onPress={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  <Text style={styles.removeButtonText}>
                    Remove
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.description}>
              Your cart is empty.
            </Text>
          }
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>
            {totalPrice} SEK
          </Text>
        </View>
      </View>
    </ScreenBackground>
  );
}
