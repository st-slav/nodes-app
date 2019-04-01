import { path } from '../utils'

export class NotesController {

    static create = (app) => {
        app.get(path.NOTES, async (req, res) => {
            const notes = await NoteService.getNotes()
            res.send(notes)
        })
        
        app.post(path.NOTES, async (req, res) => {
            const note = await NoteService.createNote(req.body)
            res.send(note)
        })
        
        app.delete(path.NOTE, async (req, res) => {
            const note = await NoteService.deleteNote(req.params.id)
            res.send(note)
        })
    }
}