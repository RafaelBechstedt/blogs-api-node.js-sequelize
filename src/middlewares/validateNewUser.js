const validateNewUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .send({ message: '"displayName" length must be at least 8 characters long' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400)
    .send({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400)
    .send({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = { validateNewUser };