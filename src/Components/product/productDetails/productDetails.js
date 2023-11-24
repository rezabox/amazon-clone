import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { ADD_ITEM_INDEX, CALCULATE_TOTAL_QUANTILY, DECREASE_ITEM, selectCartItems } from "../../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import useFetchDocument from "../../customHooks/useFetchDocument";
import Product from "../product";

const ProductDetails = () => {
    const { id } = useParams();
    const [product,setProduct] = useState(null);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { document } = useFetchDocument("products", id);
    const { data } = useFetchCollection("reviews"); 
    const filteredReviews = data.filter((review) => review.productID === id);
    const cart = cartItems.find((cart) => cart.id === id);
    const isCartAdded = cartItems.findIndex((cart) => {
         return cart.id === id;
    })
    useEffect(() => {
        setProduct(document)
    }, [document]);
    const addToCart = (product) => {
         dispatch(ADD_ITEM_INDEX(product));
         dispatch(CALCULATE_TOTAL_QUANTILY());
    };
    const decreaseCart = (product) => {
          dispatch(DECREASE_ITEM(product));
          dispatch(CALCULATE_TOTAL_QUANTILY());
    };
    return(
        <section>
              <div className="">
                  <h2>Product Details</h2>
                  <div>
                      <Link to="/">&larr; Back To Products</Link>
                  </div>
                  {product === null ? (
                      <> 
                        
                      </>
                  ) : (
                    <>
                    </>
                  )}
              </div>
        </section>
    )
}
export default ProductDetails;