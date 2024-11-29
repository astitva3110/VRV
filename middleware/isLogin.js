const { V4 } = require("paseto");

const isLogin = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(403).json({ message: "Token required" });
    }
  
    try {
      const { privateKey, publicKey } = await generateKeyPair();
      const payload = await verify(token.split(" ")[1], publicKey, {
      });
      req.user = payload;
      next();
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
  };

  module.exports=isLogin;