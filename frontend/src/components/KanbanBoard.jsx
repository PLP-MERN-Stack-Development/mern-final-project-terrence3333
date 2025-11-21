import React from 'react';
import TaskCard from './TaskCard.jsx';

const KanbanBoard = ({ tasks }) => {
  const columns = ['todo', 'in-progress', 'done'];

  return (
    <div className="grid grid-cols-3 gap-4">
      {columns.map((col) => (
        <div key={col} className="bg-gray-100 p-2 rounded min-h-[300px]">
          <h3 className="text-lg font-semibold capitalize mb-2">{col.replace('-', ' ')}</h3>
          {tasks
            .filter((task) => task.status === col)
            .map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
