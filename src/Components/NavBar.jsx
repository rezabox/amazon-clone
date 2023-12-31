import { Link, useNavigate } from "react-router-dom"
import ImageAmazon from '../images/amazon.png';  
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";
import { BsChevronDown } from "react-icons/bs";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { AdminOnlyLink } from "./adminOnlyRoute/AdminOnlyRoute";
import { selectCartTotalQuantity } from "../redux/slice/cartSlice";
import Search from "./Search/Search";


const Navbar = () => {
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [isMenu, setIsMenu] = useState(false);
    const cartItem = useSelector(selectCartTotalQuantity);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
           if (user) {
              if (user.displayName == null){
                  const u1 = user.email.slice(0, -10);
                  const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                  setDisplayName(uName);
              } else {
                 console.log(user.photoURL);
                 setDisplayName(user.displayName);
                 setPhotoURL(user.photoURL);
              }
              dispatch(
                SET_ACTIVE_USER({
                  email: user.email,
                  userName: user.displayName ? user.displayName : displayName,
                  userID: user.uid,
                  userImage: user.photoURL ? user.photoURL : photoURL
                })
                );
           } else {
            setPhotoURL("")
            setDisplayName("");
            dispatch(REMOVE_ACTIVE_USER());
           }
        })
    }, [dispatch, displayName, photoURL])
  
    const isLoggedIn = () => {
         if(displayName) {
            return(
              <>
                <button onClick={() => !isMenu ? setIsMenu(true) : setIsMenu(false)} className="flex items-center gap-2 hover:underline cursor-pointer text-orange-400">
                     <div>Hi , {displayName}</div>
                     <BsChevronDown size={15}/>
                </button>
              </>
            )
         }
         return (
            <Link to="/login" className="flex items-center gap-2 hover:underline cursor-pointer">
                <div>Login</div>
            </Link>
        )
    }

    const logoutUser = () => {
       signOut(auth)
       .then(()=> {
           Swal.fire({
              title: "Logout successfully.",
              icon: "success",
              showConfirmButton: false,
              timerProgressBar: true,
              timer:3000,
              toast:true,
              position:'top',
           })
           navigate("/");
           setIsMenu(false);
       })
       .catch((error) => {
          Swal.fire({
            title: "Logout error.",
            icon: "error",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
         })  
       })
    }

    return(
        <header className="min-w-[1000px]">
          <div className="flex bg-amazonclone text-white h-[60px]">
              {/* {left} */}
            <div className="flex items-center m-4">
              <Link to={"/"}>
                  <img
                  className="h-[35px] w-[100px] m-2"  
                  src={ImageAmazon} 
                  alt="amazon image" />
              </Link>
              <div className="mt-[-10px] pl-4">
                 <div className="text-xs xl:text-sm">Deliver to</div>
                 <div className="text-sm xl:text-base font-bold">United Kingdom</div>
              </div>
            </div>
             {/* {Middel} */}
             <div className="flex grow relative item-center">
                {/* {Search Commponents} */}
             </div>
             {/* {Right} */}
             <div className="flex item-center m-4">
                 <div className="mt-[-10px] pl-4">  
                       {isLoggedIn()}
                        <div id="AuthDropDown"  className={`absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] right-5 mt-5 border shadow-lg ${
                         isMenu ? "visible" : "hidden"
                          }`}>
                           <div className="flex justify-start gap-1 p-3">
                             <img src={photoURL} className="w-[80px] h-[80px] rounded-full mt-[-10px] " alt="" />
                             <div className="font-bold text-[20px]  ml-4">{displayName}</div>
                           </div>
                           <div className="border-b" />
                           <ul className="bg-white">
                              <li className="text-[11px] py-2 px-4 w-full hover:underline text-gray-500 hover:text-orange-500 cursor-pointer">
                                 <Link to={"/orders"}>My Orders</Link>
                              </li>
                             <AdminOnlyLink>
                               <li className="text-[11px] py-2 px-4 w-full hover:underline text-gray-500 hover:text-orange-500 cursor-pointer">
                                 <Link to={"/admin"}>Admin Panel</Link>
                               </li>
                              </AdminOnlyLink>
                              <li onClick={logoutUser} className="text-[11px] py-2 px-4 w-full hover:underline text-gray-500 hover:text-orange-500 cursor-pointer">
                                 Sign Out
                              </li>
                           </ul>
                        </div>
                         <div className="text-sm xl:text-base font-bold">
                            Accounts & Lists
                          </div>
                        </div>
                  <Link to={"/cart"}>
                     <div className="flex pr-3 pl-3">
                       <ShoppingCartIcon className="h-[48px] mt-[-10px]"/>   
                         <div className="relative">
                            <div className="absolute right-[9px] font-bold mt-[-18px] mr-[-8px] text-xl text-orange-400">
                               {cartItem}
                            </div>
                         </div>
                         <div className="mt-[-9px] ml-[4px] text-xs xl:text-sm font-bold">shopping<span className="flex font-bold text-lg">-Basket</span></div>
                     </div>
                   </Link>
             </div>
          </div>
        </header>
    )
}
export default Navbar;
