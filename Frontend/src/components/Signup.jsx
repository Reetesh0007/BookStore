import React from 'react'
import {Link, useNavigate, useLocation} from "react-router-dom";
import Login from "../components/Login";
import {useForm} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"; 


function Signup() {
 const location=useLocation();
 const navigate=useNavigate();
 const from=location.state?.from?.pathname || "/"

  const onSubmit = async (data) => {
    // Handle form submission
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Signup Successfully");
       navigate(from ,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }) .catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error:" + err.response.data.message)

      }
    })
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
   <>
   <div className='flex h-screen item-center justify-center'>
   <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h2 className='text-xl font-bold text-center'>Welcome!</h2>
    <h3 className="text-lg text-center">Signup</h3>

    <div className='mt-4 space-y-2'>
    <span>Name</span>
    <br/>
    <input type="text" placeholder='Enter your full name' className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("fullname", { required: true })}
    />
     <br />
      {errors.fullname && (<span className='text-sm text-red-500'>
      This field is required</span>)}
   </div>

   <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br/>
    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("email", { required: true })}
    />
     <br />
                {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
   </div>
 

  <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br/>
    <input type="text" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("password", { required: true })}
    />
     <br />
    {errors.email && (<span className='text-sm text-red-500'>This field is required</span>)}
   </div>
   
   <div className='flex justify-around mt-4'>
     <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
    <p className='text-xl'>Have account?{" "}
     <button
     className='underline text-blue-500 cursor-pointer'
     onClick={()=>
        document.getElementById("my_modal_3").showModal()
     }
     >
        Login
     </button>{" "}
     <Login/>
    </p>
      </div>
      </form>
     </div>
    
    </div>
   </div>
   </>
  )
}

export default Signup