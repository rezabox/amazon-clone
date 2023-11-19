import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_ITEM_INDEX, CALCULATE_TOTAL_QUANTILY } from "../../../redux/slice/cartSlice";


const ProductItem = ({ product, grid, id, name, price, desc, imageURL  }) => {
  const dispatch = useDispatch();
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  const addToCart = (product) => {
    dispatch(ADD_ITEM_INDEX(product));
    dispatch(CALCULATE_TOTAL_QUANTILY());
  };
  return (
      <>
        <div className="grid">
           <Link to={`/product-details/${id}`}>
               <div className="img">
                  <img src={imageURL} alt={name} />
               </div>
           </Link>
           <div className="content">
               <div className="detials">
                     {`$${price}`}
                     {/* <h4>{shortenText(name,15)}</h4> */}
               </div>
    
           </div>
        </div>
      </>
  );
};

export default ProductItem;
