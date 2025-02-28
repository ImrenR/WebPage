import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from "../data.js";


const CardDetails = () => {

const {namee} =useParams()
const navigate= useNavigate()
  return (
    <div className="container text-center mt-4">
       {data.map((a) =>
          a.name === namee && ( 
            <div>
              <h3>{a.name}</h3>
              <img src={a.img} alt="" width="300px" />
              <h3>{a.text} </h3>
              <h4>{a.yorum} </h4>
              <div>
                <button className="btn btn-warning"
                onClick={()=>navigate(-1)}>GO BACK</button>
                <button className="btn btn-primary"
                onClick={()=>navigate("/")}>GO HOME</button>
              </div>
            </div>
          )
        )}
    </div>
    );
};

export default CardDetails;