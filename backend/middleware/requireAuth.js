import jwt from "jsonwebtoken";
import "dotenv/config";
import Auth from "../models/authModel.js";

const requireAuth = async (req, res, next) => {
  // Verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      error:
        "Missing authorization token. Please log in or provide valid credentials to access this resource.",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await Auth.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({
      error:
        "Access Denied: Valid authorization credentials are required for this request.",
    });
  }
};

export default requireAuth;
