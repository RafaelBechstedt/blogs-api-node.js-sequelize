const { User } = require('../models');

const findUser = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
  });
  return user;
};

module.exports = {
  findUser,
};