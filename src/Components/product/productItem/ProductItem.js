import React, { useEffect, useState } from "react";
import { createDispatchHook, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  ADD_ITEM_INDEX,
  CALCULATE_TOTAL_QUANTILY,
  SAVE_URL,
} from "../../../redux/slice/cartSlice";
import { selectProduct } from "../../../redux/slice/productSlice";
import Loader from "../../loader/Loader2";
import styles from "./ProductItem.css";
import { selectIsLoggedIn } from "../../../redux/slice/authSlice";

const ProductItem = ({ product }) => {
  const products = useSelector(selectProduct);
  const isLogIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = window.location.href;
  const checkLogin = (product) => {
      if(isLogIn){
        addToCart(product)
      }else{
          dispatch(SAVE_URL(url));
          navigate('/login')          
      }
  }
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  const addToCart = (product) => {
    dispatch(ADD_ITEM_INDEX(product));
    dispatch(CALCULATE_TOTAL_QUANTILY(product));
  };

  return (
    <>
      <div className="grid">
        {products.length === 0 ? (
          <>
            <Loader />
          </>
        ) : (
          <div className="section space-y-5">
            {products.map((product, index) => {
              const { id, name, price, imageURL1 } = product;
              return (
                <div className="list">
                  <div className="img">
                    <Link to={`/product-details/${id}`}>
                      <div className="image_product cursor-pointer">
                        <img src={imageURL1} alt={name} />
                      </div>
                    </Link>
                    <div className="content">
                      <div className="details">
                        <p>{`$${price}`}</p>
                        <h3>{shortenText(name, 18)}</h3>
                        <button
                          className="btn cursor-pointer"
                          onClick={() => checkLogin(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductItem;
