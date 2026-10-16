import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import{BlurView} from "expo-blur";

import bottomTabs from "./src/styles/bottomTabs";
import { store } from "./src/store/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase";
import { useDispatch } from "react-redux";
import { setCart } from "./src/store/cartSlice";
import { loadCart, saveCart } from "./src/store/cartStorage";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Cart from "./src/screens/Cart";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";

console.log("Login component:",Login);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...bottomTabs,

        tabBarBackground:() => (
          <BlurView
          intensity={70}
          tint="dark"
          style={bottomTabs.glass}
          />
        ),
    
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile"){
            iconName = focused ? "person" : "person-outline"
          }else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: "Cine-shop",
          headerShown: false,
         }}
      />

      <Tab.Screen
      name="Profile"
      component={Profile}
      options={{title: 'Profile',
        headerShown: false,
      }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Shopping Cart",
          headerShown: false,
         }}
      />
    </Tab.Navigator>
  );
}
function CartSync() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isActive = true;
    let cartReady = false;
    let activeUserId = null;
    let saveQueue = Promise.resolve();

    const unsubscribeStore = store.subscribe(() => {
      if (!cartReady) return;

      const items = store.getState().cart.items;
      const userId = activeUserId;

      saveQueue = saveQueue.then(() => saveCart(userId, items));
    });

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      cartReady = false;
      activeUserId = user?.uid ?? null;

      const items = await loadCart(activeUserId);

      if (!isActive) return;

      dispatch(setCart(items));
      cartReady = true;
    });

    return () => {
      isActive = false;
      unsubscribeStore();
      unsubscribeAuth();
    };
  }, [dispatch]);

  return null;
}
export default function App() {
  return (
    <Provider store={store}>
      <CartSync />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
  