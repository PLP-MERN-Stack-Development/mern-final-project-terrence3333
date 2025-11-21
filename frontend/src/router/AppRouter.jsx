import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Projects from '../pages/Projects.jsx';
import ProjectDetails from '../pages/ProjectDetails.jsx';
import { useAuth } from '../hooks/useAuth.js';

const AppRouter = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/projects"
        element={user ? <Projects /> : <Navigate to="/login" />}
      />
      <Route
        path="/projects/:id"
        element={user ? <ProjectDetails /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
    </Routes>
  );
};

export default AppRouter;
