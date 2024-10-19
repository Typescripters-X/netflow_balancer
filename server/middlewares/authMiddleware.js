const jwt = require("jsonwebtoken");
const User = require("../models/user")
require("dotenv").config();

async function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }
    
    const validToken = token.split(" ")[1];
  try {
    const decoded = jwt.verify(validToken, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id)
    console.log("🚀 ~ auth ~ user:", user)
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid", err: err.message });
  }
}

module.exports = auth;
