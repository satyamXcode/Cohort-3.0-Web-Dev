const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret"; // Store in .env in production!

function auth(req, res, next) {
  // 1. Get token from header
  const authHeader = req.headers.authorization;
  
  // 2. Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract token after "Bearer "

  try {
    // 3. Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id; // Attach user ID to request
    next();
  } catch (err) {
    // Handle invalid/expired tokens
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = {
  auth,
  JWT_SECRET
};