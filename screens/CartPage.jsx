import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeView } from "../components/SafeView";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../Redux/Slices/cartSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
// items = [{"description": "Warm and cozy jacket for winter.", "id": "1", "image": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Stylish Jacket", "price": "Rs 79.99"}]

const CartPage = () => {
    const dispatch = useDispatch();
    const action = bindActionCreators({ addToCart,removeItem }, dispatch);
  const store = useSelector((state) => state.cart);
  const items = store.cart;
  const renderCartItem = ({ item }) => {

    return (
    <View className="flex-row bg-white rounded-lg shadow-lg p-4 mb-4">
      <Image source={{ uri: item.image }} className="w-24 h-24 rounded-md" />
      <View className="flex-1 ml-4">
        <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
        <Text className="text-gray-500 text-sm">{item.description}</Text>
        <Text className="text-lg font-bold text-gray-700 mt-2">
          {item.price}
        </Text>
        <View className="flex-row items-center mt-3">
          <TouchableOpacity className="p-2 bg-red-500 rounded-full mr-3" onPress={()=>action.removeItem(item.id)}>
            <Icon name="trash-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <Text className="text-gray-500">Remove</Text>
        </View>
      </View>
    </View>
  )};

  return (
    <SafeView>
      {/* <View className="flex-1 bg-gray-100 p-4"> */}
        {/* <Text className="text-2xl font-bold text-gray-800 mb-4">Your Cart</Text> */}
        <FlatList
          data={items}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
    
    </SafeView>
  );
};

export default CartPage;
