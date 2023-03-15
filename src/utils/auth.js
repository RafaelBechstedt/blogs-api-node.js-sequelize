const jwt = require('jsonwebtoken');

  const createToken = (data) => {
    const jwtConfig = { algorithm: 'HS256' };
    const token = jwt.sign(data, process.env.JWT_SECRET, jwtConfig);
    return token;
  };

module.exports = createToken;