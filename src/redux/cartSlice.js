import { createSlice } from "@reduxjs/toolkit";

function storeInLocalStorage(data) {
  localStorage.setItem("cart", JSON.stringify(data));
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalAmount: 0,
    totalItems: 0,
  },

  reducers: {
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        const temoCart = state.data.map((product) => {
          if (product.id === action.payload.id) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty * product.price;

            return {
              ...product,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return product;
          }
        });
        state.data = temoCart;
        storeInLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
      }
    },
    updateQuantity: () => {},
    removeItem: () => {},
    getCartTotal: () => {},
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal, RESET } =
  cartSlice.actions;

export default cartSlice.reducer;
