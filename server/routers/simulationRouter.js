const Router = require("express");

const simulationRouter = Router();

const simulationController = require("../controllers/simulation/simulationController");

const isAuth = require("../middlewares/authMiddleware")

simulationRouter.get("/",isAuth, simulationController )

module.exports = simulationRouter;

