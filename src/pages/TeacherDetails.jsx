import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Loading from "../img/Loading_icon.gif";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const  navigate= useNavigate();
  const { id } = useParams();
  const [kisi, setKisi] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch = `https://jsonplaceholder.typicode.com/users${id}`
      .then((res) => res.json())
      .then((veri) => setKisi(veri))
      .catch((err) => setError(true))
      .finally(()=>setLoading(false))
  }, []);

  if (error === true) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div>
        <img src={Loading} alt="" />
      </div>
    )
  }

  return (
    <div className="container text-center my-4">
      <div>
        <img
          src={`https://api.dicebear.com/9.x/micah/svg?seed=${kisi.id}`}
          alt=""
          width="300px"
        />
        <h4>{kisi.username}</h4>
        <h5>{kisi.name}</h5>
        <h5>{kisi.phone}</h5>
        <h5>{kisi.website}</h5>
        <h5>{kisi.email}</h5>
      </div>

      <button className="btn btn-warning"
      onClick={()=>navigate(-1)}
      >Go Back</button>
      <button className=""
      onClick={()=>navigate('/')}
      >Go Home</button>
    </div>
  );
};

export default TeacherDetails;
