import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRICE_RANGE, STORE_PRODUCTS, selectProduct } from "../../redux/slice/productSlice";
import useFetchCollection from "../customHooks/useFetchCollection";
import ProductItem from "./productItem/ProductItem";
import ProductList from "./productList/ProductList";


const Product = ({}) => {
   const { data, isLoading } = useFetchCollection("products");
   const products = useSelector(selectProduct);
   const dispatch = useDispatch();
   

   useEffect(() => {
      dispatch(
         STORE_PRODUCTS({
            products: data,
         })
      );
      dispatch(
          GET_PRICE_RANGE({
             products: data,
          })
      );
   }, [dispatch,data])
  return(
    <>
       <div>
           <ProductItem  products={products}/>
       </div>
    </>
  )
} 
export default Product;