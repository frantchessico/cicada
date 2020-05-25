const firebase = require('firebase');
const firebaseConfig = require('./key');

const fireConfig = firebase.initializeApp(firebaseConfig);


module.exports = fireConfig;