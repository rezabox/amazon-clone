import { useRef, useState } from 'react';
import ImageAmazon from '../images/amazon.png';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Footer = () => {
  const emailForm = useRef();
  const sendEmailForm = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_mtdc3tq",
          "template_igry7up",
          emailForm.current,
          "wsZ2TtVela5Wma8lu" 
        )
        Swal.fire({
           title:"Email Sended",
           icon: "success",
           showConfirmButton: false,
           timerProgressBar: true,
           timer:3000,
           toast:true,
           position:'top',
        })
  };

   return(
      <>
        <footer className="min-w-[1000px] bg-amazonclone mt-5 ">
          <div className="footer-in">
           <div className="image_logo flex items-center justify-center">
               <img
                 className="h-[45px] w-[120px] mt-5"  
                  src={ImageAmazon} 
                  alt="amazon image" /> 
          </div> 
          <div className="connect_with_me">
           <div className='flex item-center justify-evenly p-5'>
               <form ref={emailForm} onSubmit={sendEmailForm}>
                  <card className='card'>
                    <div className="grid items-center space-y-3  px-5">
                      <input type="text" name="user_name" className='formInput'  placeholder='User Name'  required/>
                      <input type="text" name='user_email' className='formInput' placeholder='User Email' required/>
                    </div>
                    <div className="grid items-center  px-5 mt-5">
                      <textarea name="TextBox" placeholder='Text Box' className='formInput' id="" cols="30" rows="10"></textarea>
                    </div>
                  </card>
                </form>
               <div className='Map_amazon'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163739.38817271497!2d8.46474156482827!3d50.11571368908715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd091a4bb89f2d%3A0x570d334a93f55ea4!2sAmazon%20Locker%20-%20fynn!5e0!3m2!1sen!2sde!4v1702647562583!5m2!1sen!2sde" className='px-10 ml-[25%]' width="600" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
           </div>
              
          </div>
        </footer>
      </>
   )
}
export default Footer;