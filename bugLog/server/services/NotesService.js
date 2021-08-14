import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getAll(query = {}) {
    return await dbContext.Notes.find(query).populate('creator', 'name picture')
  }

  async getById(noteId) {
    const note = await dbContext.Notes.findById(noteId).populate('creator', 'name picture')
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }

  async create(body) {
    const note = await dbContext.Notes.create(body)
    return await dbContext.Notes.findById(note._id)
  }

  async remove(id, user) {
    const note = await this.getById(id)
    if (user.id === note.creatorId.toString()) {
      await this.getById(id)
      return await dbContext.Notes.findByIdAndDelete(id)
    }
  }
}

export const notesService = new NotesService()
