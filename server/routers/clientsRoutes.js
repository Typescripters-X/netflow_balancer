const express = require("express");
const router = express.Router();

const getClientsController = require("../controllers/clients/getClientsController");
const getClientController = require("../controllers/clients/getClientController");
const isAdmin = require("../middlewares/isAdminMiddleware");


router.get("/:_id", isAdmin, getClientController);
router.get("/", isAdmin, getClientsController);

module.exports = router;