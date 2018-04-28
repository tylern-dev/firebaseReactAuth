// require('dotenv').config();
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const authAdmin = admin.auth();

exports.users_signup = (req, res, next) => {
  authAdmin.createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: true,
  })
    .then(userRecord => {
      // create user in db
      const user = new User({
        firebaseId: userRecord.uid,
        email: userRecord.email,
      })
      user.save()
        .then(response =>
          authAdmin.createCustomToken(userRecord.uid)
            .then(customToken =>(res.json(customToken)))
            .catch(err => console.log('token error',err))
          )
        .catch(err => console.log('error from Mdb: ',err))
    }).catch(err => console.log('error from firebase: ',err))
  }


exports.user_login = (req, res, next) => {
  User.findOne({email: req.body.email}).exec()
    .then( user => res.json(user))
}

exports.delete_user = (req, res, next) => {
  // console.log(req.body)
  User.findOneAndRemove({email: req.body.email}).exec()
    .then( result => {
      authAdmin.deleteUser(result.firebaseId)
      .then( user => {
        res.json({message: 'Deleted user successfully'})
        console.log("Successfully deleted user");
      })
      .catch( error => console.log('error deleting', error))

    })
    .catch(err => console.log(err));



}

exports.users_get_all = (req, res, next) => {

}

