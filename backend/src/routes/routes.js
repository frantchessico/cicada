const router = require('express').Router();

const User = require('../controllers/HandlerUser');
const Login = require('../controllers/Login')



router.post('/register', User.createUser)
router.post('/login', Login.login);
router.put('/update', User.updateUser)
router.get('/user', User.index)

module.exports = router;