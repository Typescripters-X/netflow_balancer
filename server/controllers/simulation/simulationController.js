const History = require("../../models/history");

const MAX_ISP_BANDWITH = 100;
const FILE_SIZE = 1000;
const CLIENT_MAX_BANDWITH = 50; // static now for the sake of simplicity

let currentAvailabeBandwith = MAX_ISP_BANDWITH;
let connectedClientCount = 0;

async function simulationController(req, res) {
  try {
    connectedClientCount++;
    console.log(
      "🚀 ~ simulationController ~ connectedClientCount:",
      connectedClientCount
    );

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked"); // to simulate file streaming

    let downloadedData = 0;
    let steps = 0;

    const start = new Date();

    const sendData = async () => {
      if (downloadedData < FILE_SIZE) {
        res.write(
          `It is ${req.user.name} - ${(downloadedData / FILE_SIZE) * 100}%!\n`
        );

        currentAvailabeBandwith = MAX_ISP_BANDWITH / connectedClientCount; // split evenly

        console.log(
          "🚀 ~ username",
          req.user.name,
          "~ currentAvailabeBandwith:",
          currentAvailabeBandwith
        );

        if (req.user.bw_setByAdmin !== 0) {  
          CLIENT_MAX_BANDWITH <= currentAvailabeBandwith
            ? (downloadedData += CLIENT_MAX_BANDWITH) // get his max bw
            : (downloadedData += currentAvailabeBandwith); // no available bandwith so he won't reach his max bw
        } else {
          downloadedData += req.user.bw_setByAdmin;
        }
        
        steps++;
        setTimeout(sendData, 1000); // Send every 1 second just to visualize better the idea
      } else {
        // complete download
        connectedClientCount--;
        const historyRecord = new History({
          userId: req.user._id,
          requested_bw: req.query.requested_bw,
          allocated_bw: FILE_SIZE / steps,
          duaration: new Date() - start,
        });
        console.log(
          "~ historyRecord.steps:",
          steps,
          "🚀 ~ username",
          req.user.name,
          "~ historyRecord:",
          historyRecord
        );

        await historyRecord.save();

        res.end(); // Close the connection after downloading finished
      }
    };
    await sendData(); // Start sending data
  } catch (e) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = simulationController;
