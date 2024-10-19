const User = require("../../models/user");

const getClientsController = async (req, res) => {
    try {
        const clients = await User.find({ isAdmin: false },
            { password: 0, __v: 0 }
        );
        res.status(200).json(clients);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server error" });
    }
    }

module.exports = getClientsController;