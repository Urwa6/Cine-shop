import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { store } from "./src/store/store";

import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import Cart from "./src/screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Cine-shop" }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Movie Detail" }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Shopping Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}