import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
  storeItems:[
    {
      id: "1",
      name: "Stylish Jacket",
      price: "Rs 79.99",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      description: "Warm and cozy jacket for winter.",
    },
    {
      id: "2",
      name: "Running Shoes",
      price: "Rs 59.99",
      image: "https://images.pexels.com/photos/15300927/pexels-photo-15300927/free-photo-of-flowers-in-boot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Lightweight and durable shoes for everyday wear.",
    },
    {
      id: "3",
      name: "Leather Backpack",
      price: "Rs 49.99",
      image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Stylish backpack perfect for any adventure.",
    },
    // Add more items as needed
  ],
  cart:[]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        id = action.payload;
        const item = state.storeItems.find((item)=>item.id === id);

        // Check if item is already in cart
        if(state.cart.find((item)=>item.id === id)){
            return {
                ...state
            }
        }
        return {
            ...state,
            cart: [...state.cart,item]
          }
    },
    removeItem: (state, action) => {
        id = action.payload;
        return {
            ...state,
            cart: state.cart.filter((item)=>item.id !== id)
          }
    }
  },
  extraReducers: (builder) => {


  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;