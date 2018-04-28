const jwt = require('jsonwebtoken');

const admin = require('firebase-admin');
const authAdmin = admin.auth();

exports.verifyToken = (req,res,next) => {
  jwt.verify(req.body.token, (err, decoded) =>{
    if (err) throw err;
    res.json(decoded)
    console.log(decoded)
  })
}