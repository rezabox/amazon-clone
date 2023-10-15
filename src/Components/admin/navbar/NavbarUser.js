import { useSelector } from "react-redux";
import { selectUserImage, selectUserName } from "../../../redux/slice/authSlice";


const NavbarUser = () => {
  const userName = useSelector(selectUserName);
  const userImage = useSelector(selectUserImage)
  return(
      <div className="navbar bg-orange-300 w-[15%]">
           <div className="user  flex flex-col p-2 items-center justify-center">
              <img src={userImage} className="w-[20%] rounded-full" alt="" />  
              <h1 className="font-bold">{userName}</h1>
           </div>
      </div> 
   );
};
export default NavbarUser;