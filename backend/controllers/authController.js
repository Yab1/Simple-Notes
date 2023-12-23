import Auth from "../models/authModel.js";

// Sign up user
const signUp = async (req, res) => {
  try {
    const { username, email, password, profile } = req.body;
    const user = await Auth.signup(username, email, password, profile);
    res.status(200).json({ email, user });
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
