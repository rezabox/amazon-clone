import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";


const initialState = {
    cartItems:localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    previousURL: "",
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       ADD_TO_CART(state, action) {
          const productItem = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          
          if(productItem >= 0){
            state.cartItems[productItem].cartQuantity  += 1;
            Swal.fire({
                title: `${action.payload.name} increces by one`,
                position:'top'     
            });
          } else {
              const tempProducts = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProducts);
              Swal.fire({
                  title: `${action.payload.name} add item to cart`,
                  position: 'top',
              })
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       },
       DECREASE_ITEM(state, action) {
         const productIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id        
         );
         if (state.cartItems[productIndex].cartQuantity > 1) {
             state.cartItems[productIndex].cartQuantity -= 1;
             Swal.fire({
                 title: `${action.payload.name} remove item`,
                 position:'top'
             });
         } else if (state.cartItems[productIndex].cartQuantity === 1) {
              const newCartItem = state.cartItems.filter(
                  (item) => item.id !== action.payload.id
              );
              state.cartItems = newCartItem;
              Swal.fire({
                title: `${action.payload.name} decreased by one`,
                position: 'top'
              });
           }
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       },
       REMOVE_FROM_CART(state, action) {
        const newCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItem;
        Swal.fire({
            title: `${action.payload.name} removed from cart`,
            position: 'top'
        })
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       },
       CLEAR_CART(state, action){
           state.cartItems = [];
           Swal.fire({
               title:'Cart is empty',
               position: 'top'
           });
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       },
       CALCULATE_SUBTOTAL(state, action){
           const array = [];
           state.cartItems.map((item) => {
              const { price, cartQuantity } = item;
              const cartItemAmount = price * cartQuantity;
              return array.push(cartItemAmount);
           });
           const totalAmount = array.reduce((a, b) => {
            return a + b;
          }, 0);
          state.cartTotalAmount = totalAmount;
       },
       CALCULATE_TOTAL_QUANTILY(state, action){
          const array = [];
          state.cartItems.map((item) => {
               const { cartQuantity } = item;
               const quantity = cartQuantity;
               return array.push(quantity);
          });
          const totalQuantity = array.reduce((a, b) => {
            return a + b;
          },0);
          state.cartTotalQuantity = totalQuantity;
       },
       SAVE_URL(state, action) {
          state.previousURL = action.payload;
       },
    },
});

export const {
   SAVE_URL,
   CALCULATE_SUBTOTAL,
   CALCULATE_TOTAL_QUANTILY,
   CLEAR_CART,
   REMOVE_FROM_CART,
   DECREASE_ITEM,
   ADD_TO_CART
} = cartSlice.actions;


export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectPreviousURL = (state) => state.cart.previousURL;

export default cartSlice.reducer;