const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createHash = async password => {
  const saltRounds = 1;
  return await bcrypt.hash(password, saltRounds);
};

exports.verifyPassword = async (password, hash) => {
  console.log('Password', password, 'Hash', hash);
  return await bcrypt.compare(password, hash);
};

exports.createUser = async (username, email, password) => {
  const hash = await createHash(password);
  console.log(username, email, password);
  const newUser = new User({
    email,
    username,
    password: hash
  });
  console.log('creating new user', newUser);
  return await newUser.save();
};

exports.updateUser = async (id, password) => {
  const hash = await createHash(password);
  const updateUser = await User.findByIdAndUpdate(
    id,
    {
      passwordDigest: hash
    },
    { new: true }
  );
  return await updateUser;
};

exports.createAccessToken = async user => {
  try {
    return jwt.sign(user, process.env.JWT_SECRET);
  } catch (error) {
    console.log(error.stack);
  }
};
