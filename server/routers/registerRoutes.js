const express = require('express');
const router = express.Router();

const registerController = require('../controllers/auth/registerController.js');
router.post('/',registerController); 



module.exports = router;