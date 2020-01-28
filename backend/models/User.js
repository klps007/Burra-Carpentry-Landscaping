const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    createdTime: { type: Date, default: Date.now },

    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { collection: 'users' }
);

const User = mongoose.model('Users', userSchema);

module.exports = User;
