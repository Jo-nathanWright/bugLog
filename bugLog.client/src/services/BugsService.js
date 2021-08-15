import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAll() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async create(body) {
    const res = await api.post('api/bugs', body)
    AppState.bugs.push(res.data)
    return res.data.id
  }
}

export const bugsService = new BugsService()
