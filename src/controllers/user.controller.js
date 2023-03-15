const { userService } = require('../services/user.service');
const createToken = require('../utils/auth');

const userController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUser(email, password);
  const { password: _, ...userWithoutPassword } = user;
  const token = createToken(userWithoutPassword);
  return res.status(200).json({ user, token });
};

module.exports = {
  userController,
};
