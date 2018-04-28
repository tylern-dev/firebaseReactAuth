const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  firebaseId: {
    type: String
  },
  firstName: {
    type: String,

  },
  lastName: {
    type: String,

  },
  email: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin','customer'],
    default: 'customer',
    required: true
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;