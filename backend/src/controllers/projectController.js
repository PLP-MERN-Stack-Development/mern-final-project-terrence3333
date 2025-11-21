import Project from '../models/Project.js';
import Task from '../models/Task.js';
import Activity from '../models/Activity.js';
import { getIo } from '../config/socket.js';

// @desc    Get all projects for user
// @route   GET /api/projects
// @access  Private
export const getProjects = async (req, res) => {
  const projects = await Project.find({
    $or: [{ owner: req.user.id }, { members: req.user.id }]
  }).populate('owner', 'name email');
  res.json(projects);
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Private
export const createProject = async (req, res) => {
  const { name, description, members } = req.body;
  const project = await Project.create({
    name,
    description,
    owner: req.user.id,
    members
  });

  await Activity.create({
    action: `Created project ${name}`,
    user: req.user.id,
    project: project._id
  });

  res.status(201).json(project);
};

// @desc    Get project by ID
// @route   GET /api/projects/:id
// @access  Private
export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id)
    .populate('owner', 'name email')
    .populate('members', 'name email');
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
};
