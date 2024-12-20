import React, { useState } from 'react';
import ValidationFormObject from '../../validation';
import { Link } from 'react-router-dom';
function SignupForm() {


  const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
    file:''
  });


  const handleChange=(e)=>{
    const {name, value}=e.target;
    setdata({
      ...data,
      [name]:value
    })
    console.log(data)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const NameV=ValidationFormObject.valditeName(data.name);
    const EmailV=ValidationFormObject.valditeEmail(data.name);
    const PassV=ValidationFormObject.valditePass(data.name);

    if (typeof NameV=='string' && NameV.length>1){
      return setError(NameV);
    }
    if (typeof EmailV=='string' && EmailV.length>2){
      return setError(EmailV);
    }
    if (typeof PassV=='string' && PassV.length>2){
      return setError(PassV);
    }
    
  }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="file">
            Upload File
          </label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={''}
            accept=".jpg, .jpeg, .png"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>

        <p className="text-center">Already have an account? <Link to={'/Login'}>Login</Link></p>
      </form>
    </div>
  );
}

export default SignupForm;
