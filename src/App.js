import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import HomePage from "./Components/HomePage";

const  App = ()=> {
  return (
     <BrowserRouter>
       <HomePage/>
       <Routes>
          <Route></Route>
       </Routes>
     </BrowserRouter>
  )
}

export default App;
