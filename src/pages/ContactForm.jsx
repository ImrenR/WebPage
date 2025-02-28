import { useState } from "react";


const ContactForm = () => {
  const [person, setPerson] = useState({
    isim:"",
    password:"",
    email:"",
  });
  const {isim, password, email} = person;

  const handleSubmit =(e)=> {
    e.preventDefault()
    alert({isim, email})
  }

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: 
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            name="isim"
            value={isim}
            onInput={(e)=>setPerson({...person,[e.target.id]:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            value={password}
            onInput={(e)=>setPerson({...person,[e.target.id]:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: 
          </label>
          <input
            type="email"
            className="form-control"
            onInput={(e)=>setPerson({...person,[e.target.id]:e.target.value})}
            id="email"
            name="email"
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};
export default ContactForm;