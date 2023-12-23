import mongoose from "mongoose";
import "dotenv/config";
import express from "express";
import authRouter from "./routes/authRouter.js";
import noteRouter from "./routes/noteRouter.js";

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // listen  for requestes
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
})();
