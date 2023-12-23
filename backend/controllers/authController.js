import Auth from "../models/authModel.js";

// Sign up user
const signUp = async (req, res) => {
  try {
    res.json({ mssg: "SignUp User" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Sign in user
const signIn = async (req, res) => {
  try {
    res.json({ mssg: "SingIn User" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signUp, signIn };
