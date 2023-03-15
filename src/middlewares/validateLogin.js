const userService = require('../services/user.service');

const validateLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const findUser = await userService.findUser(email, password);
    if (!findUser) {
        return res.status(400).json({ message: 'Invalid Fields' });
    }
    next();
};

module.exports = { validateLogin };