import Auth from "../models/authModel.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Sign up user
const signUp = async (req, res) => {
  try {
    const { username, email, password, profile } = req.body;
    const user = await Auth.signup(username, email, password, profile);

    // create a token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Sign in user
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.signin(email, password);

    // create a token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signUp, signIn };
