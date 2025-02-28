import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import MyNavbar from "../components/MyNavbar";
import NotFound from '../pages/NotFound';
import Paths from '../pages/Paths';
import CardDetails from '../pages/CardDetails';
import TeacherDetails from '../pages/TeacherDetails';
import PrivateRouter from './PrivateRouter';
import Login from '../pages/Login';
import FS from "../pages/FS";
import AWS from "../pages/AWS";
import Footer from '../components/Footer';


const AppRouter = () => {
  return (
    <BrowserRouter>
    
    <MyNavbar/>
   
    <Routes>
 
     <Route exact path="/" element={<Home/>}/>  
     <Route path="/teacher" element= {<Teacher/>}/> 
     <Route path="/teacher/:id" element={<TeacherDetails/>} />
     <Route path="/login" element= {<Login/>}/> 
     <Route path="/courses" element={<CourseCard/>}/> 
     <Route path="/courses/:namee" element={<CardDetails/>}  />
    
     <Route path="*" element={<NotFound/>} />
    
  <Route path="/contact" element={<PrivateRouter/>}>
    <Route path="" element={<ContactForm/>}/> 
  </Route>
     
     <Route path='/paths' element={<Paths />}> 
        <Route path="/paths/fs" element={<FS/>} />
        <Route path="/paths/aws" element={<AWS/>} />
      </Route>
     
     </Routes>
     <Footer/>
     </BrowserRouter>
  
   )
  
}

export default AppRouter;