const express = require('express');
const userController = require('../controllers/user.controller');
const { validateNewUser } = require('../middlewares/validateNewUser');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, userController.createUser);

module.exports = userRouter;