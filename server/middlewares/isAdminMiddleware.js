const jwt = require("jsonwebtoken");
require("dotenv").config();

function isAdmin(req, res, next) {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    
    const validToken = token.split(" ")[1];
    try {
        const decoded = jwt.verify(validToken, process.env.JWT_SECRET);
        if (decoded.user.isAdmin) {
        next();
        } else {
        res.status(401).json({ message: "Not authorized" });
        }
    } catch (err) {
        res.status(401).json({ message: "Token is not valid", err: err.message });
    }
    }

module.exports = isAdmin;