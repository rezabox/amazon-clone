import { Route, Routes } from "react-router-dom";
import NavbarUser from "../../Components/admin/navbar/NavbarUser";
import Orders from "../../Components/admin/orders/Orders";
import Home from "../../Components/admin/Home/Home";
import AddProduct from "../../Components/admin/AddProduct/AddProduct";
import ViewProducts from "../../Components/admin/viewProducts/ViewProduct";

const Admin = () => {
  return (
    <>
      <div className="flex">
        <NavbarUser />
        <div className="contact">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="add-product/ADD" element={<AddProduct />} />
            <Route path="all-product" element={<ViewProducts />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Admin;
