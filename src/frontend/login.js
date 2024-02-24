import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{marginLeft:"45%"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input style={{padding:"10px"}} type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <br></br>
       <br></br>
        <input style={{padding:"10px"}} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <br></br>
       <br></br>
        <button style={{padding:"10px"}} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
