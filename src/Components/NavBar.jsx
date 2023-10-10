import { Link, useNavigate } from "react-router-dom"
import ImageAmazon from '../images/amazon.png';  
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slice/authSlice";



const Navbar = () => {
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
           if (user) {
              if (user.displayName == null){
                  const u1 = user.email.slice(0, -10);
                  const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                  setDisplayName(uName);
              } else {
                 setDisplayName(user.displayName);
                 setPhotoURL(user.photoURL)
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
   //  const user = auth.currentUser;
   //  const photoURL = user.photoURL;
   


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
                  <img src={photoURL} className="w-[50px] h-[50px] rounded-full mt-[-10px] " alt="" />
                 <div className="mt-[-10px] pl-4">  
                     <Link to={"/login"} className="text-orange-400">{!displayName ? 'LoggedIn' : `Hi ${displayName}` }</Link>
                     <button onClick={logoutUser} className="ml-5">
                          {displayName ? 'LogOut' : '' }
                     </button>
                     <div className="text-sm xl:text-base font-bold">
                        Accounts & Lists
                     </div>
                 </div>
             </div>
          </div>
        </header>
    )
}
export default Navbar;