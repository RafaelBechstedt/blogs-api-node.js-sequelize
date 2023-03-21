const { User } = require('../models');

const findUser = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });
  return user;
};

const createUser = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  } catch (error) {
    return { type: 'error', message: 'User already registered' };
  }
};

const getById = async (userId) => {
  const user = await User.findByPk(userId);
  return user;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  findUser,
  createUser,
  getById,
  getUsers,
};