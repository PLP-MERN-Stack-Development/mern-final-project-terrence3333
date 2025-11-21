import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../api/axiosClient.js';
import KanbanBoard from '../components/KanbanBoard.jsx';
import { useSocket } from '../context/SocketContext.jsx';

const ProjectDetails = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axiosClient.get(`/tasks/${id}`);
      setTasks(res.data);
    };
    fetchTasks();
  }, [id]);

  useEffect(() => {
    if (!socket) return;
    socket.emit('joinProject', id);

    socket.on('taskUpdated', (updatedTask) => {
      setTasks((prev) =>
        prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      );
    });

    return () => socket.off('taskUpdated');
  }, [socket, id]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>
      <KanbanBoard tasks={tasks} />
    </div>
  );
};

export default ProjectDetails;
