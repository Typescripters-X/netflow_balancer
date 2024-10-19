const Router = require("express");

const simulationRouter = Router();

const simulationController = require("../controllers/simulation/simulationController");

const isAuth = require("../middlewares/authMiddleware")

simulationRouter.get("/",isAuth, simulationController )

module.exports = simulationRouter;



// let subscribers = {
//   akram: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   aziz: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   raouf: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   zaki: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   ali: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   mohamed: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   abdesslam: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   rafik: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   ahmed: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   oussama: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   abdelkader: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
//   riad: {
//     max_bw: MAX_CLIENT_BANDWITH,
//   },
// };

// const history = {
//   akram: [],
//   aziz: [],
//   raouf: [],
//   zaki: [],
//   ali: [],
//   mohamed: [],
//   abdesslam: [],
//   rafik: [],
//   ahmed: [],
//   oussama: [],
//   abdelkader: [],
//   riad: [],
// };

// env


