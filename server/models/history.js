const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    max_bw: { type: Number, required: true },
    requested_bw: { type: Number, required: true },
    actual_bw: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", HistorySchema);
