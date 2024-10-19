const express = require("express");
const router = express.Router();

const getClientsController = require("../controllers/clients/getClientsController");
const getClientController = require("../controllers/clients/getClientController");
const editClientController = require("../controllers/clients/editClientController");
const getClientsCountByMonths = require("../controllers/clients/getClientsCountByMonths");

const isAdmin = require("../middlewares/isAdminMiddleware");


router.get("/count", isAdmin, getClientsCountByMonths);
router.get("/:_id", isAdmin, getClientController);
router.get("/", isAdmin, getClientsController);

router.patch("/:_id", isAdmin,editClientController);

module.exports = router;