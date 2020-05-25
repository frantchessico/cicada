const router = require('express').Router();

const User = require('../controllers/CreateUser');
const Login = require('../controllers/Login')



router.post('/register', User.createUser)
router.post('/login', Login.login)


module.exports = router;