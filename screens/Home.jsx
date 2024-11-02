import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeView } from "../components/SafeView";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { addToCart, removeItem } from "../Redux/Slices/cartSlice";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const action = bindActionCreators({ addToCart, removeItem }, dispatch);
  const store = useSelector((state) => state.cart);
  const cartItems = store.cart;
  const items = store.storeItems;

  const renderItem = ({ item }) => {
    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    return (
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.description}>{item.description}</Text>

          {isInCart ? (
            <TouchableWithoutFeedback onPress={()=>{
                navigation.navigate("Cart")
            }}>
<View style={styles.inCartContainer} >
              <Icon name="checkmark-circle-outline" size={20} color="#007bff" />
              <Text style={styles.inCartText}>In Cart</Text>
            </View>
            </TouchableWithoutFeedback>
            
          ) : (
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => {
                action.addToCart(item.id);
                navigation.navigate("Cart");
              }}
            >
              <Icon name="cart-outline" size={20} color="#fff" />
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeView>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 16,
    color: "#888",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  inCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "#e0f3ff",
  },
  inCartText: {
    fontSize: 16,
    color: "#007bff",
    marginLeft: 8,
  },
});
