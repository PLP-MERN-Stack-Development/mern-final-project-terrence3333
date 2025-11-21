import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient.js';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axiosClient.get('/projects');
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            key={project._id}
            to={`/projects/${project._id}`}
            className="bg-white p-4 rounded shadow hover:bg-indigo-50"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
