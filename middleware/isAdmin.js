const isAdmin = (req, res, next) => {
    if (!req.user) {
      return res.status(403).json({ message: "User not authenticated" });
    }
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Admin access required" });
    }
    next();
  };
  
  module.exports = isAdmin;