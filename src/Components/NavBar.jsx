import { Link } from "react-router-dom"
import ImageAmazon from '../images/amazon.png';  

const Navbar = () => {
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
                     <div className="text-xs xl:text-sm">Hello, sign in</div>
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