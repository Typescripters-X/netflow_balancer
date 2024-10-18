const express = require("express");
const router = express.Router();

const getClientsController = require("../controllers/clients/getClientsController");
const isAdmin = require("../middlewares/isAdminMiddleware");


router.get("/", isAdmin, getClientsController);

module.exports = router;