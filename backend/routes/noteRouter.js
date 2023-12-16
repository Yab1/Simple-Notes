import express from "express";
// import data from "../data/db.json";

const noteRouter = express.Router();

// GET all notes
noteRouter.get("/", (req, res) => {
  res.json({ msg: "Get all notes" });
});

// GET a single note
noteRouter.get("/:id", (req, res) => {
  res.json({ msg: "Get a single note" });
});

// POST a new note
noteRouter.post("/", (req, res) => {
  res.json({ msg: "Post a new note" });
});

// DELETE a new note
noteRouter.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a note" });
});

// UPDATE a new note
noteRouter.patch("/:id", (req, res) => {
  res.json({ msg: "Update a note" });
});

export default noteRouter;
