const User = require('../models/User');

const {
  verifyPassword,
  createUser,
  createAccessToken
} = require('../utils/admin');

exports.login = async (req, res) => {
  let { username, password } = req.body;
  //email = email.toLowerCase();
  if (username && password) {
    try {
      const query = await User.findOne({ username: username });
      if (query) {
        const result = await verifyPassword(password, query.password);
        if (!result) {
          return res.status(403).send('bad credentials');
        } else {
          const { _id, username } = query;
          const token = await createAccessToken({ _id, username });
          return res.status(200).send({ token });
        }
      } else {
        return res.status(403).send('bad credentials');
      }
    } catch (error) {
      console.log(error.stack);
      return res.status(404).send('an error occured');
    }
  } else {
    return res.status(403).send('bad credentials');
  }
};

exports.register = async (req, res) => {
  let { username, password, email } = req.body;
  if (username && password) {
    try {
      const query = await User.findOne({ username: username });

      if (!query) {
        const user = await createUser(username, email, password);
        const { _id } = user;
        const token = await createAccessToken({ _id, username });
        return res.status(201).send({ token });
      } else {
        return res.status(400).send('user already exists');
      }
    } catch (error) {
      console.log(error.stack);
      return res.status(404).send(error.message);
    }
  } else {
    return res.status(403).send('bad credentials');
  }
};

exports.checkUser = async (req, res) => {
  const { user } = req;
  try {
    res.status(200).send(user);
    console.log('Login Successfull...welcome to the admin dashboard');
  } catch (error) {
    console.log(error.stack);
    res.status(500);
  }
};
