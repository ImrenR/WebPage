import React from 'react'




const PrivateRouter = () => {
  const name="imren"
  const password="34577"

   
  return name==="imren" && password==="34577" ? (<Outlet/>): (<Navigate to="/login"/>)(
    <div>PrivateRouter</div>
  )
}

export default PrivateRouter