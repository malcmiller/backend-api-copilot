import request from 'supertest';
import app, { server } from '../index'; // Assuming your Express app and server are exported from index.ts
import userService from '../services/UserService'; // Import the service to access initialized users

const validUserId = userService.getAllUsers()[0].id; // Use the first user's ID for testing

describe('User Management System', () => {
  it('should add a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john.doe@example.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should retrieve all users', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should retrieve a user by ID', async () => {
    const response = await request(app).get(`/users/${validUserId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', validUserId);
  });

  it('should update a user’s details', async () => {
    const response = await request(app)
      .put(`/users/${validUserId}`)
      .send({ name: 'Jane Doe' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'Jane Doe');
  });

  it('should delete a user by ID', async () => {
    const response = await request(app).delete(`/users/${validUserId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'User deleted successfully');
  });

  it('should handle invalid user IDs', async () => {
    const invalidUserId = 'invalid-id';
    const response = await request(app).get(`/users/${invalidUserId}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'User not found');
  });
});

describe('Edge Cases for User Management', () => {
  it('should return 404 for updating a non-existent user', async () => {
    const nonExistentUserId = 'non-existent-id';
    const response = await request(app)
      .put(`/users/${nonExistentUserId}`)
      .send({ name: 'Non Existent User' });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'User not found');
  });

  it('should return 404 for deleting a non-existent user', async () => {
    const nonExistentUserId = 'non-existent-id';
    const response = await request(app).delete(`/users/${nonExistentUserId}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'User not found');
  });
});

afterAll(() => {
  server.close(); // Close the server after all tests
});