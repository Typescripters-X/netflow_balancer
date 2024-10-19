const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }
    
    const validToken = token.split(" ")[1];
  try {
    const decoded = jwt.verify(validToken, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid", err: err.message });
  }
}

module.exports = auth;
