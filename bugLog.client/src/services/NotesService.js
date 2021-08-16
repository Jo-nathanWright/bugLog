import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async create(body) {
    const res = await api.post('api/notes', body)
    AppState.notes.push(res.data)
    return res.data
  }

  async destroy(id) {
    await api.delete('api/notes/' + id)
    AppState.notes = AppState.notes.filter(n => n.id !== id)
  }
}

export const notesService = new NotesService()
