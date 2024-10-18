const User = require("../../models/user");
const History = require("../../models/history");

const getClientController = async (req, res) => {
  try {
    const { _id } = req.params;
    const client = await User.findById(_id, { password: 0, __v: 0 });
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    const history = await History.find({ userId: _id });
    res.status(200).json({ client, history });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getClientController;
