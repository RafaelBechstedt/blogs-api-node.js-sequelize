const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }

  try {
    const { data: { userId } } = jwt.verify(token, secret);
    const user = await userService.getById(userId);

    if (!user) {
      return res.status(401).send({ message: 'Expired or invalid token' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;