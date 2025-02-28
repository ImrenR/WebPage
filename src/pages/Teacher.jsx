import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Teacher = () => {
const navigate = useNavigate()
const [people, setPeople] = useState([]);

const getData = async() => {
 const res = await axios("https://jsonplaceholder.typicode.com/users");
  setPeople(res.data);
};

useEffect(() => {
  getData();
 }, []);
  return (
    <div className='container text-center mt-4'>
      <div className='row'>
        {people.map((item)=> {
          return (
        <div key={item.id} className='col-12 col-sm-6 col-d-md-4'>
          <img 
           src={`https://api.dicebear.com/9.x/micah/svg?seed=${item.id}`}
           alt="" 
           onClick={()=>navigate(`/teacher/${item.id}`)}/>
           <h5>{item.name}</h5>
           <h6>{item.username}</h6>
           <h6>{item.phone}</h6>
        </div>
        );
        })}
      </div>
    </div>
  );
};

export default Teacher