import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Viewall = () => {
  const [storeData, setStoreData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/employee");
    setStoreData(data.slice(0, 10));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3000/employee/" + id);
    fetchData();
  };

  const updateItem = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-blue-600 text-white text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Age</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {storeData.map(val => (
            <Fragment key={val.id}>
              <tr className="border-t hover:bg-gray-100">
                <td className="py-2 px-4">{val.name}</td>
                <td className="py-2 px-4">{val.email}</td>
                <td className="py-2 px-4">{val.age}</td>
                <td className="py-2 px-4">{val.phone}</td>
                <td className="py-2 px-4 space-x-2">
                  <button onClick={() => updateItem(val.id)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(val.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewall;
