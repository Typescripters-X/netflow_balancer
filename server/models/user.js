const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    max_bw: { type: Number, default:10 },
    bw_setByAdmin: { type: Number, default:0}, // 0 means not set by admin
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
