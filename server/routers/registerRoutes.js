const express = require('express');
const router = express.Router();

const registerController = require('../controllers/auth/register.js');
router.post('/',registerController); 



module.exports = router;