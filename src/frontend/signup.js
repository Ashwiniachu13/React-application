import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';


const Signup = () => {
    
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [signedUp, setSignedUp] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/signup', formData);
      console.log(response.data);
      setSignedUp(true);
    
    } catch (error) {
      console.error(error);
    }
  };
  if(signedUp) {
    return <Redirect to="/login" />;
    
  }

  return (
    <div style={{marginLeft:"45%"}}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input style={{padding:"10px"}} type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
       <br></br>
       <br></br>
        <input style={{padding:"10px"}} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <br></br>
       <br></br>
        <button style={{padding:"10px"}} type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
