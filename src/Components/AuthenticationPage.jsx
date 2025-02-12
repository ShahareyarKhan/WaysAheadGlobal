import React, { useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { useMode } from '../context/ModeContext';

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true); 
  
  const { darkMode } = useMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
    try {
      const response = await axios.post(`http://localhost:3000${endpoint}`, formData);
      console.log(response.data);
      alert(isLogin ? "Login Successful!" : "Signup Successful!");

      localStorage.setItem("token", response.data.authtoken);
      localStorage.setItem("admin", response.data.admin);

      window.history.back();

    } catch (error) {
      console.error("Authentication error:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md shadow-lg rounded-lg p-6 button border ">
        <h2 className={`text-3xl ${darkMode!=="dark"?"text-orange-600":"text-blue-500"} py-3 font-bold text-center `}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 "
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 "
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 "
              required
            />
          </div>



          <button
            type="submit"
            className={`w-full  ${darkMode==="dark"?"bg-blue-500":"bg-orange-600"} py-2 text-sm rounded  transition`}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
          <span
            className="text-red-600 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthenticationPage;
