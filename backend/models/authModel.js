import mongoose from "mongoose";
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
