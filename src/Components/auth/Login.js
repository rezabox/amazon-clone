import { useState } from 'react';
import amazompng from '../../images/amazon.png'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { auth } from '../../firebase/config';
import Swal from 'sweetalert2';
import authSlice from '../../redux/slice/authSlice';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();

     const redirectUser = () => {
         navigate("/");    
     }; 


     const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential)=>{
            Swal.fire({
            title:"Login Successful...",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
            })  
             redirectUser()
         }) 
         .catch((error) => {
          Swal.fire({
            title:"Problem to login",
            icon: "warning",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
            })  
         })
     };
     const provider = new GoogleAuthProvider();
     const  signInWithGoogle = ()=> {
      signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        Swal.fire({
          title: 'Login success',
          position: 'top',
          timer:3000,
          color:'success'
        })
        navigate('/')
      }).catch((error) => {
        Swal.fire({
          title: 'Login error',
          position: 'top',
          timer:3000,
          color:'warning'
        })
      });
     }

     return(
      <>
        <div className="grid items-center justify-center mt-5">
          <div className="img ml-[12%]">
            <img src={amazompng} width={340} alt="" />
          </div>
          <div className="card ml-[40%] mt-5 font-bold">
            Login
          </div>
            <form className='grid' onSubmit={loginUser}>
             <input
               className='border border-4  p-2 mt-5 rounded-full outline-none'
               type='text'
               placeholder='Email'
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
              <input
               className='border border-4  p-2 mt-5 rounded-full outline-none'
               type='password'
               placeholder='Password'
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
             <button type='submit' className='bg-orange-400 w-[50%] mt-5 ml-20 p-2 font-bold rounded-full'>
                Login 
             </button>
            </form>
            <button onClick={signInWithGoogle} className='flex items-center justify-evenly bg-gray-300 text-gray-500 mt-5 p-3 rounded-full'>
                <FcGoogle size={22} /> Login With Google 
            </button>
            <span className='flex items-center justify-center mt-5 '>
              <Link to={"/Register"} className='bg-gray-300 p-2 text-gray-500 rounded-full'>Register another account</Link>
            </span>
        </div>
      </>
     )
}
export default Login;