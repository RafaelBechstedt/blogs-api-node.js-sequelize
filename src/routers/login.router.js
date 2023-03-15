const express = require('express');
const { userController } = require('../controllers/user.controller');
const { validateLogin } = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, userController);

module.exports = {
  loginRouter,
};