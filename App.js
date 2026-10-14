import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
//Bottom navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import{BlurView} from "expo-blur";
import bottomTabs from "./src/styles/bottomTabs";

import { store, persistor } from "./src/store/store";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Cart from "./src/screens/Cart";
import Login from "./src/screens/Login";

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
          } else if (route.name === "Cart") {
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
        options={{ title: "Cine-shop" }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Shopping Cart" }}
      />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Movie Detail" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}
  