const express = require('express');
const { createUser, getUsers } = require('../controllers/user.controller');
const { validateNewUser } = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, createUser);
userRouter.get('/', validateToken, getUsers);

module.exports = userRouter;