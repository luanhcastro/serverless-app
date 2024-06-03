const { createUserHandler, getUserHandler } = require('./userController');
const { createUser, getUser } = require('../domain/userUseCases');

jest.mock('../domain/userUseCases');

describe('User Controller Tests', () => {
  test('createUserHandler should return status 201 and user data', async () => {
    const req = { body: { name: 'Pedro Henrique', role: 'admin', age: 30 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const user = { id: '123', name: 'Pedro Henrique', role: 'admin', age: 30 };
    createUser.mockResolvedValueOnce(user);

    await createUserHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  test('getUserHandler should return status 200 and user data', async () => {
    const req = { params: { id: '123' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const user = { id: '123', name: 'Pedro Henrique', role: 'admin', age: 30 };
    getUser.mockResolvedValueOnce(user);

    await getUserHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(user);
  });
});
