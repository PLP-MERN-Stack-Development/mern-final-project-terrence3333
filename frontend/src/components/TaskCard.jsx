import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <h4 className="font-semibold">{task.title}</h4>
      {task.assignee && <p className="text-sm text-gray-600">Assigned: {task.assignee.name}</p>}
      {task.description && <p className="text-sm">{task.description}</p>}
    </div>
  );
};

export default TaskCard;
