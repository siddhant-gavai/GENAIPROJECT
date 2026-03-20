const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

// Add a TTL index to automatically delete documents after 24 hours since tokens expire in 1 day
blacklistSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

module.exports = mongoose.model("blacklistToken", blacklistSchema);