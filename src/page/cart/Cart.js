import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";
import { FaTrashAlt } from 'react-icons/fa';
import { ADD_ITEM_INDEX, CALCULATE_SUBTOTAL, CALCULATE_TOTAL_QUANTILY, CLEAR_CART, DECREASE_ITEM, REMOVE_FROM_CART, SAVE_URL, selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from "../../redux/slice/cartSlice";


const Cart = ()=> {
  const cartItems = useSelector(selectCartItems);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const decreaseCart = (cart) => {
     dispatch(DECREASE_ITEM(cart))
  };
  const increaseCart = (cart) => {
      dispatch(ADD_ITEM_INDEX(cart));
  }
  const removeFromCart = (cart) => {
       dispatch(REMOVE_FROM_CART(cart));
  }
  const clearCart = (cart) => {
       dispatch(CLEAR_CART());
  }
  useEffect(() => {
       dispatch(CALCULATE_SUBTOTAL());
       dispatch(CALCULATE_TOTAL_QUANTILY());
       dispatch(SAVE_URL());
  },[cartItems, dispatch])
  return(
      <section>

      </section>
  )
}
export default Cart;