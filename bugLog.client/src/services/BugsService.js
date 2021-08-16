import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAll() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getById(id) {
    const res = await api.get('api/bugs/' + id)
    AppState.activeBug = res.data
  }

  async create(body) {
    const res = await api.post('api/bugs', body)
    AppState.bugs.push(res.data)
    return res.data.id
  }

  async edit(body, id) {
    const res = await api.put('api/bugs/' + id, body)
    AppState.activeBug = res.data
  }
}

export const bugsService = new BugsService()
