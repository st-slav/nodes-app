import mongoose from 'mongoose'
import '../models/Note'

const Note = mongoose.model('Note')

export const getNotes = () => Note.find()
export const getNoteById = () => Note.findById(id)
export const createNote = ({ title, text, color }) => new Note({
    title,
    text,
    color,
    createAt: new Date()
}).save()
export const deleteNote = (id) => Note.findById(id).remove()

export const NoteService = {
    getNotes,
    getNoteById,
    createNote,
    deleteNote
}