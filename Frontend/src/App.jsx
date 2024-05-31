import React from 'react' ;
import Home from "./Home/Home";
import Courses from "./Courses/courses";
import About from "./components/About";
import Contact from "./components/Contact";
import {Navigate, Route, Routes} from "react-router-dom";
import Signup from './components/Signup';
import {Toaster} from "react-hot-toast";
import {useAuth} from "./context/AuthProvider";

function App() {

  const [authUser, setAuthUser]= useAuth();
  console.log(authUser);
  return (
    <>
   {/* <Home/>
   <course/> */}

   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/signup" />} />
    <Route path="/About" element={<About/>}/>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/Contact" element={<Contact/>} />
   </Routes>
   <Toaster />

   </div>
  
    </>
  )
}

export default App