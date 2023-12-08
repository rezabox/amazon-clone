import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../productItem/ProductItem";
import { selectFilterProducts } from "../../../redux/slice/filterSlice";


const ProductList = ({ products }) => {
  const filterProducts = useSelector(selectFilterProducts);
   return(
      <>
       <div className="list">
          {products.length === 0 ? (<p>No product found.</p>) : (
              <>
                {filterProducts.map((product) => {
                     return(
                        <div key={product.id}>
                           <ProductItem {...product}  product={product} />
                        </div>
                     )
                })}
              </>
          )}
       </div>
       </>
   ) 
}
export default ProductList;