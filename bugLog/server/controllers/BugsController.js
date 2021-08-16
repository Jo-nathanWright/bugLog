import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotes)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const bug = await bugsService.getAll({ creatorId: req.userInfo.id })
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const bug = await bugsService.getById(req.params.id)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotes(req, res, next) {
    try {
      const note = await notesService.getNotes({ bug: req.params.id })
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.create(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      // DONT TRUST THE USER
      delete req.body.closed
      const user = req.userInfo
      req.body.id = req.params.id
      const bug = await bugsService.edit(req.body, user)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      res.send()
    } catch (error) {
      next(error)
    }
  }
}
