import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAll() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }
}

export const bugsService = new BugsService()
