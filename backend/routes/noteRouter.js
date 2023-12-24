import { Router } from "express";
import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/noteController.js";
import requireAuth from "../middleware/requireAuth.js";

const noteRouter = Router();

// Require auth for all note routes
noteRouter.use(requireAuth);

// GET all notes
noteRouter.get("/", getNotes);

// GET a single note
noteRouter.get("/:id", getNote);

// POST a new note
noteRouter.post("/", createNote);

// DELETE a new note
noteRouter.delete("/:id", deleteNote);

// UPDATE a new note
noteRouter.patch("/:id", updateNote);

export default noteRouter;
