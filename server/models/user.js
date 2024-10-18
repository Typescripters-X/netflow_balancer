const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    max_bw: { type: Number, default:10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
