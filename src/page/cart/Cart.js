import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";
import { FaTrashAlt } from "react-icons/fa";
import Notiflix from "notiflix";
import {
  ADD_ITEM_INDEX,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTILY,
  CLEAR_CART,
  DECREASE_ITEM,
  REMOVE_FROM_CART,
  SAVE_URL,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";


const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const decreaseCart = (cart) => {
    dispatch(DECREASE_ITEM(cart));
  };
  const increaseCart = (cart) => {
    dispatch(ADD_ITEM_INDEX(cart));
  };
  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CART(cart));
  };
  const clearCart = (cart) => {
    dispatch(CLEAR_CART());
  };
  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTILY());
    dispatch(SAVE_URL());
  }, [cartItems, dispatch]);

  const url = window.location.href;
  const checkout = () => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/login");
    }
  };
  const confirmDelete = (id, imageURL1) => {
    Notiflix.Confirm.show(
      "Delete Product!!",
      "You are about to delete this product",
      "Delete",
      "Cancel",
      function okCd() {
        removeFromCart(id, imageURL1);
      },
      function cancelCd(){
        console.log('canceled deleted');
      },
      {
        width: "320px",
        borderRadius: "3px",
        titleColor: "orangered",
        okButtonBackground: "orangered",
        cssAnimationStyle: "zoom",
      },
    );
  };

  return (
    <section>
      <div className="container p-10 h-[80vh]">
        <h2 className="font-bold">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p>your cart is currently empty.</p>
            <br />
            <div>
              <Link to="/">&larr; Continue Shopping</Link>
            </div>
          </>
        ) : (
          <>
            <table className="w-[100%]">
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              {cartItems.map((cart, index) => {
                const { id, name, price, imageURL1, cartQuantity } = cart;
                return (
                  <>
                    <tbody key={id} >
                      <tr className="">
                        <td>{index + 1}</td>
                        <td className="">
                          <p>
                            <b>{name}</b>
                          </p>
                          <img
                            src={imageURL1}
                            className="mt-[-20px]"
                            alt={name}
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td>${price.toFixed(2)}</td>
                        <td>
                          <div className="count flex items-center justify-center font-bold text-xl">
                            <button
                              className="--btn mr-3"
                              onClick={() => decreaseCart(cart)}
                            >
                              -
                            </button>
                            <p>
                              <b>{cartQuantity}</b>
                            </p>
                            <button
                              className="--btn ml-3"
                              onClick={() => increaseCart(cart)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(price * cartQuantity).toFixed(2)}</td>
                        <td className="icon cursor-pointer flex items-center justify-center">
                          <FaTrashAlt
                            size={19}
                            color="red"
                            onClick={() => confirmDelete(cart)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
            <div className="summary">
                <button className="bg-orange-400 text-white p-2 rounded-md mt-10" onClick={clearCart}>Clear All Cart</button>
                <div className="checkout">
                    <Link to='/'>&larr; Continue shopping</Link>
                </div>
                <br />
                <card className='cardStyle'>
                  <div className="float-right mt-[-8%] border-2 border-orange-400 w-[20%] p-5">
                    <p>
                      <b>{`Cart Items(s): ${cartTotalQuantity}`}</b>
                    </p>
                    <div className="text flex items-center justify-between">
                         <h4>Subtotal:</h4>
                         <h3 className="font-bold text-xl">{`$${cartTotalAmount.toFixed(2)}`}</h3>
                    </div>
                    <p>Tax an shopping calculate at checkout</p>
                    <button className="bg-orange-300 p-2 mt-5 w-[100%] text-white text-xl" onClick={checkout}>Checkout</button>
                  </div>
                </card>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Cart;
