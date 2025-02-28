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
const AppRouter = () => {
  return (
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
 
     <Route exact path="/" element={<Home/>}/>  
     <Route path="/teacher" element= {<Teacher/>}/> 
     <Route path="/teacher:id" element={<TeacherDetails/>} />
     <Route path="/course" element={<CourseCard/>}/> 
     <Route path="/courses:namee" element={<CardDetails/>}  />
     <Route path="/contact" element={<ContactForm/>}/>  
     <Route path="*" element={<NotFound/>} />
     <Route path="/paths" element={<Paths/>} />
     </Routes>
     </BrowserRouter>
  
   )
  
}

export default AppRouter