import Note from "../models/noteModel.js";
import mongoose from "mongoose";

// GET all note
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({}).sort({ createdAt: -1 });
    console.log(req);
    console.log(notes);
    res.status(200).json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// GET a single note
const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: "No such note" });

    const note = await Note.findById(id);
    if (!note) return res.status(400).json({ errror: "No such note" });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// CREATE a new note
const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a note
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ errror: "No such note" });
    const note = await Note.findOneAndDelete({ _id: id });
    if (!note) return res.status(400).json({ errror: "No such note" });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE a note
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ errror: "No such note" });
    const note = await Note.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!note) return res.status(400).json({ errror: "No such note" });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getNotes, getNote, createNote, deleteNote, updateNote };
