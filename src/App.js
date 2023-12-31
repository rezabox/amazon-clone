import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { HomePage } from "./Components";
import Navbar from "./Components/NavBar";
import Login from "./Components/auth/Login";
import RegisterUser from "./Components/auth/Register";
import AdminOnlyRoute from "./Components/adminOnlyRoute/AdminOnlyRoute";
import Orders from "./Components/admin/orders/Orders";
import Admin from "./page/admin/Admin";
import ProductDetails from "./Components/product/productDetails/productDetails";
import Cart from "./page/cart/Cart";
// import {Admin} from './page'
// import AddProduct from "./Components/admin/AddProduct/AddProduct";

const App = ()=> {
  return (
    <BrowserRouter> 
      <Navbar/>
       <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="orders" element={<Orders/>} /> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/Register" element={<RegisterUser/>} />
          <Route path="/admin/*" element={<AdminOnlyRoute><Admin/></AdminOnlyRoute>} />
          <Route path="/product-details/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>} />
       </Routes>
     </BrowserRouter>
  )
}

export default App;
