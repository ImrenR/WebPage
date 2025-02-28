import React from "react";
import { Button } from "react-bootstrap";
const Buton = () => {
  
  return (
    <div className="text-center">
      <Button
        className="btn btn-danger p-4 m-2 w-25"
        
      >
        LOGIN
      </Button>
      <Button className="btn btn-danger p-4 m-2 w-25">CLOSE</Button>
      <Button className="btn btn-danger p-4 m-2 w-25">DELETE</Button>
    </div>
  );
};

export default Buton;