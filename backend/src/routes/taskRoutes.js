import express from 'express';
import {
  getTasksByProject,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

// Get tasks by project
router.get('/:projectId', protect, getTasksByProject);

// Create task
router.post(
  '/',
  protect,
  [
    body('title').notEmpty().withMessage('Task title required'),
    body('project').notEmpty().withMessage('Project ID required')
  ],
  validateRequest,
  createTask
);

// Update task
router.put('/:id', protect, updateTask);

// Delete task
router.delete('/:id', protect, deleteTask);

export default router;
