import request from 'supertest';
import app from '../app.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import Task from '../models/Task.js';
import generateToken from '../utils/generateToken.js';

describe('Task API', () => {
  let token;
  let project;

  beforeEach(async () => {
    const user = await User.create({ name: 'Task User', email: 'task@example.com', password: 'password123' });
    token = generateToken(user._id);
    project = await Project.create({ name: 'Test Project', owner: user._id });
  });

  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'New Task', project: project._id });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('New Task');
  });

  it('should get tasks for project', async () => {
    await Task.create({ title: 'Task 1', project: project._id });
    const res = await request(app)
      .get(`/api/tasks/${project._id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
