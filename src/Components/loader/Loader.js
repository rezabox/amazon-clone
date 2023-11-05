import { BallTriangle   } from 'react-loading-icons'


const Loader = () => {
   return (
     <div className="wrapper">
        <div className="loader">
             <BallTriangle width={80} height={80} stroke="#FFA500" />
        </div>
     </div>
   )
}
export default Loader;