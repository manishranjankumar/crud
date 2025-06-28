import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [empname, empSetName] = useState({ name: "", email: "", age: "", phone: "" });
  const { name, email, age, phone } = empname;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    empSetName({ ...empname, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/employee", empname);
      navigate('/viewall');
    } catch (error) {
      console.error(error);
    } finally {
      empSetName({ name: "", email: "", age: "", phone: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
      {["name", "email", "age", "phone"].map(field => (
        <div key={field}>
          <label className="block text-sm font-medium capitalize mb-1">{field}</label>
          <input
            type={field === "age" || field === "phone" ? "number" : "text"}
            name={field}
            value={empname[field]}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit</button>
    </form>
  );
};

export default Post;
