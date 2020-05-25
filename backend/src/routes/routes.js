const router = require('express').Router();

const User = require('../controllers/CreateUser');
const Api = require('../controllers/Api')



// router.post('/register', User.createUser)
// router.post('/user', User.login)
router.post('/api', Api.getApiInffo)

module.exports = router;