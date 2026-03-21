const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklist.model");

const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) { 
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const isBlacklisted = await blacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized: Token blacklisted" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret_key");
        const user = await userModel.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        console.log("Auth Middleware Error:", error.message);
        res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }
};

module.exports = { authUser };
