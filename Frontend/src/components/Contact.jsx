import React from 'react'
import { useNavigate, useLocation} from "react-router-dom";

import {useForm} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 


 function Contact() {
   const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        message: data.message,
      };

      const response = await axios.post("http://localhost:4001/user/Contact", userInfo);
      console.log(response.data);

      if (response.data) {
        toast.success("Message submitted successfully");
        navigate(from, { replace: true });
        localStorage.setItem("Users", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  
   //  const {
   //    register,
   //    handleSubmit,
   //    formState: { errors },
   //  } = useForm();
  
    return (
        <>


     <Navbar/>
      <div className='flex h-screen item-center justify-center'>
   <div className="w-[600px] ">
  <div className="modal-box h-auto min-h-[670px]">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      
  
    <h2 className="font-bold text-xl text-center">Contact Us</h2>
    <h3 className="text-  l text-center">Get in touch</h3>
    <div className='mt-4 space-y-2 ml-12'>
    <span>Name</span>
    <br/>
    <input type="text" placeholder='Enter your full name' className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("fullname", { required: true })}
    />
     <br />
      {errors.fullname && (<span className='text-sm text-red-500'>
      This field is required</span>)}
   </div>

   <div className='mt-4 space-y-2 ml-12'>
    <span>Email</span>
    <br/>
    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("email", { required: true })}
    />
     <br />
                {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
   </div>
 

  <div className='mt-4 space-y-2 ml-12'>
  <span>Message</span>
<br/>
<textarea placeholder='Enter your message' className='w-80 px-3 py-1 border rounded-md outline-none' 

rows="8" cols="60"
    {...register("message", { required: true })}
></textarea>
     <br />
    {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
   </div>
   
   <div className='flex justify-around mt-4'>
     <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
    
    
     
   
      </div>
      </form>
     </div>
    
    </div>
   </div>
     <Footer/>
        </>
       )
}


export default Contact
