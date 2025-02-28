import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'




const PrivateRouter = () => {
  const name="imren"
  const password="34577"

   
  return name==="imren" && password==="34577" ? (<Outlet/>): (<Navigate to="/login"/>)(
    <div>PrivateRouter</div>
  );
};

export default PrivateRouter;