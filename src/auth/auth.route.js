const { Router } = require('express');
const { loginController, registerController, currentController } = require('./auth.service');
const { AuthVerify } = require('../middlewares/AuthVerify')

const router = Router();

router.route('/login').post(loginController)
router.route('/').post(registerController)
router.route('/').get(AuthVerify, currentController)

modules.export = router;