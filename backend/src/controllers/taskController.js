import Task from '../models/Task.js';
import Activity from '../models/Activity.js';
import { getIo } from '../config/socket.js';

// @desc    Get tasks for a project
// @route   GET /api/tasks/:projectId
// @access  Private
export const getTasksByProject = async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId }).populate('assignee', 'name email');
  res.json(tasks);
};

// @desc    Create task
// @route   POST /api/tasks
// @access  Private
export const createTask = async (req, res) => {
  const { title, description, status, project, assignee } = req.body;
  const task = await Task.create({ title, description, status, project, assignee });

  await Activity.create({
    action: `Created task ${title}`,
    user: req.user.id,
    project
  });

  // Emit socket event
  const io = getIo();
  io.to(project).emit('taskUpdated', task);

  res.status(201).json(task);
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  Object.assign(task, req.body);
  await task.save();

  await Activity.create({
    action: `Updated task ${task.title}`,
    user: req.user.id,
    project: task.project
  });

  const io = getIo();
  io.to(task.project.toString()).emit('taskUpdated', task);

  res.json(task);
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  await task.remove();
  await Activity.create({
    action: `Deleted task ${task.title}`,
    user: req.user.id,
    project: task.project
  });

  const io = getIo();
  io.to(task.project.toString()).emit('taskUpdated', task);

  res.json({ message: 'Task removed' });
};
