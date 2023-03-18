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

module.exports = {
  findUser,
  createUser,
};