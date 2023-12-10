import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase/config";
import { ADD_ITEM_INDEX, CALCULATE_TOTAL_QUANTILY, DECREASE_ITEM, SAVE_URL, selectCartItems } from "../../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import useFetchDocument from "../../customHooks/useFetchDocument";
import Product from "../product";
import Loader from "../../loader/Loader";
import { selectIsLoggedIn } from "../../../redux/slice/authSlice";


const ProductDetails = () => {
    const { id } = useParams();
    const [product,setProduct] = useState(null);
    const isLoggIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();
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
    const url = window.location.href;
    const checkLogin = (product) => {
        if(isLoggIn){
           addToCart(product)
        }else{
            dispatch(SAVE_URL(url))
            navigate('/login')
        }
    } 
    return(
        <section>
              <div className="w-[100%] p-10">
                  <h2>Product Details</h2>
                  <div>
                      <Link to="/">&larr; Back To Products</Link>
                  </div>
                  {product === null ? (
                      <> 
                        <Loader/>
                      </>
                  ) : (
                     <>
                     <div className="flex items-center">
                      <div className="img w-[500px]">
                        <img src={product.imageURL1} alt={product.name} />
                       </div>
                       <div className="detials">
                         <div className="content">
                             <h3>{product.name}</h3>
                             <p className="price font-bold text-xl">{`$${product.price}`}</p>
                             <p>
                                <b>Brand: {product.brand}</b>
                             </p>
                             <p>{product.desc}</p>
                             <div className="text-xl font-bold mt-5">
                                {isCartAdded < 0 ? null : (
                                    <>
                                      <button 
                                      className="decressBtn bg-gray-300 pr-3 pl-3 mr-3 rounded-md" 
                                      onClick={()=> decreaseCart(product)}>
                                        -
                                      </button>
                                      <b>{cart.cartQuantity}</b>
                                      <button 
                                      className="incressesBtn bg-gray-300 pr-3 pl-3 ml-3 rounded-md" 
                                      onClick={()=> addToCart(product)}>
                                          +
                                      </button>
                                    </>
                                )}
                             </div>
                             <button className="bg-orange-400 text-white p-2 rounded-sm mt-5" onClick={()=> checkLogin(product)}>ADD TO CART</button>
                         </div>
                       </div>
                       </div>
                     </>
                  )}
              </div>
        </section>
    )
}
export default ProductDetails;