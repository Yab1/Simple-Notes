import mongoose, { Error } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const authSchema = new Schema(
  {
    username: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    profile: { type: String, require: false },
  },
  { timestamps: true }
);

// Static signup method
authSchema.statics.signup = async function (
  username,
  email,
  password,
  profile
) {
  // validation
  if (!email || !password || !username) {
    throw new Error(
      "Please ensure all required fields are filled out before submitting the form."
    );
  }

  if (!validator.isEmail(email)) {
    throw new Error(
      "The email provided is not in a valid format. Please enter a valid email address to continue."
    );
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Please use a stronger password. Include uppercase, lowercase, numbers, and special characters. Aim for at least 8 characters."
    );
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error(
      "Email already in use. Please use a different email or log in."
    );
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash, profile });

  return user;
};

export default mongoose.model("Auth", authSchema);
