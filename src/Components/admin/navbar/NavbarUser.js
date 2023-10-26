import { useSelector } from "react-redux";
import { selectUserImage, selectUserName } from "../../../redux/slice/authSlice";
import { Link } from "react-router-dom";


const NavbarUser = () => {
  const userName = useSelector(selectUserName);
  const userImage = useSelector(selectUserImage);
  return(
      <div className="navbar bg-orange-300 w-[15%]">
           <div className="user  flex flex-col p-2 items-center justify-center">
              <img src={userImage} className="w-[20%] rounded-full" alt="" />  
              <h1 className="font-bold text-gray-500">{userName}</h1>
           </div>
           <nav className="h-[83vh]">
              <ul className="space-y-5 p-5">
                  <li>
                     <Link to={"/admin/home"} className="focus:text-white">Home</Link>
                  </li>
                  <li>
                     <Link to={"/admin/all-product"} className="focus:text-white">All Products</Link>
                  </li>
                  <li>
                      <Link to={"/admin/add-product/ADD"} className="focus:text-white">Add Product</Link>
                  </li>
                  <li>
                       <Link to={"/admin/orders"} className="focus:text-white">Orders</Link>
                  </li>
              </ul>
           </nav>
      </div> 
   );
};
export default NavbarUser;