const serviceAccount = require('./serviceAccount.json');
module.exports = function (admin) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://storagebox-app.firebaseio.com"
  })
}