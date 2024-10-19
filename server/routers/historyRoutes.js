const express = require("express");
const router = express.Router();

const isAdmin = require("../middlewares/isAdminMiddleware");
const getHistoriesController = require("../controllers/history/getHistoriesController");

router.get("/", isAdmin, getHistoriesController);

module.exports = router;