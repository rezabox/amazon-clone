import ImageAmazon from '../images/amazon.png';

const Footer = () => {
   return(
      <>
        <footer className="min-w-[1000px]">
          <div className="bg-amazonclone text-white h-[100px]">
           <div className="image_logo flex items-center justify-center">
               <img
                 className="h-[45px] w-[120px] mt-5"  
                  src={ImageAmazon} 
                  alt="amazon image" /> 
          </div> 
           <div className="connect_with_me">
             
           </div>
          </div>
        </footer>
      </>
   )
}
export default Footer;