import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { HomePage } from "./Components";
import Navbar from "./Components/NavBar";
import Login from "./Components/auth/Login";
import RegisterUser from "./Components/auth/Register";
import AdminOnlyRoute from "./Components/adminOnlyRoute/AdminOnlyRoute";
import Admin from "./page/admin/Admin";


const App = ()=> {
  return (
    <BrowserRouter> 
      <Navbar/>
       <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Register" element={<RegisterUser/>} />
          <Route path="/adminPanel/*" element={<AdminOnlyRoute><Admin/></AdminOnlyRoute>} />
       </Routes>
     </BrowserRouter>
  )
}

export default App;
