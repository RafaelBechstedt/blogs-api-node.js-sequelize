const express = require('express');
const { createUser, getUsers, getUserById } = require('../controllers/user.controller');
const { validateNewUser } = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, createUser);
userRouter.get('/', validateToken, getUsers);
userRouter.get('/:id', validateToken, getUserById);

module.exports = userRouter;