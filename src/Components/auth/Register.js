import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import amazompng from '../../images/amazon.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Swal from "sweetalert2";


const RegisterUser = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCPassword] = useState('');
  const navigate =  useNavigate();

  const registerUser = (e) => {
      e.preventDefault();
      if (password !== cpassword) {
          Swal.fire({
            title:"Passwords do not match.",
            icon:"error",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
          })
      }

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
           const user = userCredential.user;
           console.log(user);
           Swal.fire({
            title:"Registration Successful...",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
           })
           navigate("/login");
      })
      .catch((error) => {
         Swal.fire({
           title:"Error to Registration...",
           icon:"error",
           timer:3000,
           toast:true,
           position:'top',
         })
      })
  };
  return(
     <>
        <div className="grid items-center justify-center mt-5">
          <div className="img ml-[12%]">
            <img src={amazompng} width={340} alt="" />
          </div>
          <div className="card ml-[35%] mt-5 font-bold">
            Register User
          </div>
            <form className='grid' onSubmit={registerUser}>
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
              <input
               className='border border-4  p-2 mt-5 rounded-full outline-none'
               type='password'
               placeholder='Confirm Password'
               required
               value={cpassword}
               onChange={(e) => setCPassword(e.target.value)}
             />
             <button type='submit' className='bg-orange-400 w-[50%] mt-5 ml-20 p-2 font-bold rounded-full'>
                Register 
             </button>
            </form>
        </div>
     </>
  )  
}
export default RegisterUser;