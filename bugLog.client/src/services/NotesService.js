import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async create(body) {
    const res = await api.post('api/notes', body)
    AppState.notes.push(res.data)
    return res.data
  }
}

export const notesService = new NotesService()
