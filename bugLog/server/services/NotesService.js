import { dbContext } from '../db/DbContext'

class NotesService {
  async getAll(query = {}) {
    return await dbContext.Notes.find(query).populate('creator', 'name picture')
  }
}

export const notesService = new NotesService()
