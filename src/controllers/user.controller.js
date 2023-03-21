const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.findUser(email, password);

  if (!user) {
    return res.status(400).send({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  return res.status(200).send({ token });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.createUser(displayName, email, password, image);

  if (newUser.type) {
    return res.status(409).send({ message: newUser.message });
  }
  const newUserId = newUser.dataValues.id;

  const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);
  return res.status(201).send({ token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).send(users);
};

module.exports = {
  login,
  createUser,
  getUsers,
};
