const jwt = require('jsonwebtoken');

exports.checkJWT = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send(err.message);
    } else {
      req.user = decoded;
      next();
    }
  });
};

exports.checkAdmin = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: 'Bad credentials' });
    } else {
      next();
    }
  });
};
