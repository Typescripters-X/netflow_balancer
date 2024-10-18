const Router = require("express");

const simulationRouter = Router();

const MAX_CLIENT_BANDWITH = 50;
let subscribers = {
  akram: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  aziz: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  raouf: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  zaki: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a1: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a2: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a3: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a4: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a5: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a6: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
  a7: {
    max_bw: MAX_CLIENT_BANDWITH,
  },
};

const history = {
  akram: [],
  aziz: [],
  raouf: [],
  zaki: [],
  a: [],
  a1: [],
  a2: [],
  a3: [],
  a4: [],
  a5: [],
  a6: [],
  a7: [],
};

// env
let connectedClientCount = 0;
const MAX_ISP_BANDWITH = 100;
const FILE_SIZE = 1000;
let currentAvailabeBandwith = MAX_ISP_BANDWITH;

simulationRouter.get("/", (req, res) => {
  connectedClientCount++;
  console.log("🚀 ~ app.get ~ connectedClientCount:", connectedClientCount);

  let steps = 0;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Transfer-Encoding", "chunked");

  let downloadedData = 0;
  console.log("🚀 ~ app.get ~ downloadedData:", downloadedData);
  console.log("🚀 ~ app.get ~ FILE_SIZE:", FILE_SIZE);

  const start = new Date();

  const sendData = () => {
    if (downloadedData < FILE_SIZE) {
      // completed download and stop
      res.write(
        `It is ${req.query.username} - ${
          (downloadedData / FILE_SIZE) * 100
        }%!\n`
      );

      currentAvailabeBandwith = MAX_ISP_BANDWITH / connectedClientCount; // split evenly

      console.log(
        "🚀 ~ username",
        req.query.username,
        "~ currentAvailabeBandwith:",
        currentAvailabeBandwith
      );

      subscribers[req.query.username].max_bw <= currentAvailabeBandwith
        ? (downloadedData += subscribers[req.query.username].max_bw) // reach max his max bw
        : (downloadedData += currentAvailabeBandwith); // no available bandwith so he won't reach his max bw

      steps++;
      setTimeout(sendData, 1000); // Send every 1 second just to visualize better the idea
    } else {
      connectedClientCount--;
      const historyRecord = {
        time: start,
        actual_bw: FILE_SIZE / steps,
      };

      history[req.query.username].push(historyRecord);
      console.log(
        "~ historyRecord.steps:",
        steps,
        "🚀 ~ username",
        req.query.username,
        "~ historyRecord:",
        historyRecord
      );

      res.end(); // Close the connection after downloading finished
    }
  };

  sendData(); // Start sending data
});

module.exports = simulationRouter;
