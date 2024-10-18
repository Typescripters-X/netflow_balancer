const mongoose = require('mongoose');

const ISPSchema = new mongoose.Schema({
    offer_bw: { type: Number, required: true },
});

module.exports = mongoose.model('ISP', ISPSchema);
