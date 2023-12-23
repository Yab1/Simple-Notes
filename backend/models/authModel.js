import mongoose from "mongoose";

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

export default mongoose.model("Auth", authSchema);
