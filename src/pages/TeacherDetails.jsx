import React from 'react'
import { useLocation } from 'react-router-dom'

const TeacherDetails = () => {

  const {state:{item}} = useLocation()






  return (
    <div className='container text-center my-4'>
     <div>
     <img 
     src={`https://api.dicebear.com/9.x/micah/svg?seed=${item.id}`}
     alt="" 
     width="300px"
     />
      <h4>{item.username}</h4>
      <h5>{item.name}</h5>
      <h5>{item.phone}</h5>
      <h5>{item.website}</h5>
      <h5>{item.email}</h5>
     </div>

     <button className='btn btn-warning'>
      Go Back
     </button>
     <button className=''>

     </button>
    </div>
    
  )
}

export default TeacherDetails