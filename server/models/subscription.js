const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema(
    {
        client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        max_bw: { type: Number, required: true },
        price: { type: Number, required: false },
    },
    { timestamps: true }
    );

module.exports = mongoose.model("Subscription", SubscriptionSchema);