import mongoose from "mongoose";
import Note from "../models/noteModel.js";

const error_msg =
  "Apologies, the requested note could not be found. Please ensure the provided ID is accurate or consider exploring other available notes.";

// GET all note
const getNotes = async (req, res) => {
  try {
    const createdBy = req.user._id;
    const notes = await Note.find({ createdBy }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a single note
const getNote = async (req, res) => {
  try {
    const createdBy = req.user._id;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: error_msg });

    const note = await Note.findOne({ _id: id, createdBy });
    if (!note) return res.status(400).json({ errror: error_msg });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// CREATE a new note
const createNote = async (req, res) => {
  try {
    const createdBy = req.user._id;

    const note = await Note.create({ ...req.body, createdBy });

    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a note
const deleteNote = async (req, res) => {
  try {
    const createdBy = req.user._id;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ errror: error_msg });
    const note = await Note.findOneAndDelete({ _id: id, createdBy });
    if (!note) return res.status(400).json({ errror: error_msg });
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
      return res.status(400).json({ errror: error_msg });
    const note = await Note.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!note) return res.status(400).json({ errror: error_msg });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getNotes, getNote, createNote, deleteNote, updateNote };
