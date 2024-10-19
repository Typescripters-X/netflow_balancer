const express = require("express");
const router = express.Router();

const isAdmin = require("../middlewares/isAdminMiddleware");
const getHistoriesController = require("../controllers/history/getHistoriesController");
const getSubscriptionsController = require("../controllers/history/getSubscriptionsController");

router.get("/", isAdmin, getHistoriesController);
router.get("/subscriptions", getSubscriptionsController);

module.exports = router;