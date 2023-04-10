const router = require('express').Router()
const userController = require('../controllers/users')
const bodyParser = require('body-parser');
const userModel = require('../models/users')

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());


router.post('/register', async (req, res) => {
  userModel.create(req.body);
  console.log(req.body);
});

router.post('/login', userController.login)

router.get('/', userController.registeredUser)

module.exports = router