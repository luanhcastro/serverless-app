const { v4: uuidv4 } = require('uuid');
const { createUser, getUser, updateUser, deleteUser, listUsers } = require('../domain/userUseCases');

const createUserHandler = async (req, res) => {
  const { name, role, age } = req.body;
  const id = uuidv4();
  try {
    const user = await createUser({ id, name, role, age });
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not create user" });
  }
};

const getUserHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await getUser(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: 'Could not find user with provided "id"' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not retrieve user" });
  }
};

const updateUserHandler = async (req, res) => {
  const id = req.params.id;
  const { name, role, age } = req.body;
  try {
    const user = await updateUser(id, { name, role, age });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not update user" });
  }
};

const deleteUserHandler = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteUser(id);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not delete user" });
  }
};

const listUsersHandler = async (req, res) => {
  try {
    const users = await listUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not list users" });
  }
};

module.exports = {
  createUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
  listUsersHandler,
};