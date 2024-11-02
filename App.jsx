import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import CartPage from "./screens/CartPage";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Home screen with a headerRight button to navigate to Cart */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <Text
                  className="cart-text mr-2 text-lg font-semibold text-white bg-blue-600 px-6 py-2 rounded-full shadow-md"
                  onPress={() => navigation.navigate("Cart")}
                >
                  Cart
                </Text>
              ),
              title: "Home",
            })}
          />
          {/* Cart screen */}
          <Stack.Screen name="Cart" component={CartPage} options={{ title: "Your Cart" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
