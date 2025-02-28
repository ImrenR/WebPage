import React, { useEffect, useState } from 'react'
import NotFound from './NotFound'


const TeacherDetails = () => {

 const {id} = useParams ()
 const [kisi,setKisi]= useState({})
const [error, setError]= useState(false)
useEffect (()=> {fetch=(`https://jsonplaceholder.typicode.com/users${id}`)
.then((res)=>res.json())
.then((veri)=>setKisi(veri))
.catch((err)=>setError(true))
},[])


if(error===true){
  return <NotFound/>
}


  return (
    <div className='container text-center my-4'>
     <div>
     <img 
     src={`https://api.dicebear.com/9.x/micah/svg?seed=${item.id}`}
     alt="" 
     width="300px"
     />
      <h4>{kisi.username}</h4>
      <h5>{kisi.name}</h5>
      <h5>{kisi.phone}</h5>
      <h5>{kisi.website}</h5>
      <h5>{kisi.email}</h5>
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