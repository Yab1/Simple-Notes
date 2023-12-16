import "dotenv/config";
import express from "express";
import { noteRouter } from "./routes/index.js";

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/notes", noteRouter);

// listen  for requestes
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
