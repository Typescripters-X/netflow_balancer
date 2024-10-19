const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const editClientController = async (req, res) => {
  const { _id } = req.params;
  const { name, mail, password, max_bw, bw_setByAdmin } = req.body;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.isAdmin) {
      return res.status(403).json({ message: "You can't edit an admin" });
    }
    if (name !== undefined) user.name = name;
    if (mail !== undefined) user.mail = mail;
    if (password !== undefined) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    if (max_bw !== undefined) user.max_bw = max_bw;
    if (bw_setByAdmin !== undefined) user.bw_setByAdmin = bw_setByAdmin;

    await user.save();
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = editClientController;
