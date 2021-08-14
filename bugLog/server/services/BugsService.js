import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getAll(query = {}) {
    return await dbContext.Bugs.find(query).populate('creator', 'name picture')
  }

  async getById(bugId) {
    const bug = await dbContext.Bugs.findById(bugId).populate('creator', 'name picture')
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    return bug
  }

  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }

  async edit(body, user) {
    const bug = await this.getById(body.id)
    if (user.id === bug.creatorId.toString()) {
      const bug = await dbContext.Bugs.findByIdAndUpdate(body.id, body, { new: true, runValidators: false })
      if (!bug) {
        throw new BadRequest('Bug not found')
      }
      return bug
    }
  }

  // async remove(body, id, user) {
  //   const bug = await this.getById(id)
  //   if (user.id === bug.creatorId.toString()) {
  //     return await dbContext.Bugs.findByIdAndUpdate(body.id, body, { new: false, runValidators: true })
  //   }
  // }
}

export const bugsService = new BugsService()
