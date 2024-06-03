const User = require('./userEntity');
const userRepository = require('../repositories/userRepository');

const createUser = async (data) => {
  const user = new User(data);
  await userRepository.save(user);
  return user;
};

const getUser = async (id) => {
  return await userRepository.get(id);
};

const updateUser = async (id, data) => {
  return await userRepository.update(id, data);
};

const deleteUser = async (id) => {
  await userRepository.delete(id);
};

const listUsers = async () => {
  return await userRepository.list();
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  listUsers,
};
