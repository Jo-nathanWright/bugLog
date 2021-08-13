import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
  }

  async getAll(req, res, next) {
    try {
      const note = await notesService.getAll({ creatorId: req.userInfo.id })
      res.send(note)
    } catch (error) {
      next(error)
    }
  }
}
