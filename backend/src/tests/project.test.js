import request from 'supertest';
import app from '../app.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import generateToken from '../utils/generateToken.js';

describe('Project API', () => {
  let token;

  beforeEach(async () => {
    const user = await User.create({ name: 'Project User', email: 'proj@example.com', password: 'password123' });
    token = generateToken(user._id);
  });

  it('should create a project', async () => {
    const res = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'New Project' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('New Project');
  });

  it('should get projects for user', async () => {
    await Project.create({ name: 'User Project', owner: token.id });
    const res = await request(app)
      .get('/api/projects')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
