import express from 'express';
import {
  getProjects,
  createProject,
  getProjectById
} from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

// Get all projects for user
router.get('/', protect, getProjects);

// Create new project
router.post(
  '/',
  protect,
  [
    body('name').notEmpty().withMessage('Project name is required')
  ],
  validateRequest,
  createProject
);

// Get project by ID
router.get('/:id', protect, getProjectById);

export default router;
