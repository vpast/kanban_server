const router = require('express').Router()
const userController = require('../controllers/users')
const bodyParser = require('body-parser');

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());


router.post('/register', userController.register);

router.post('/login', userController.login)

module.exports = router