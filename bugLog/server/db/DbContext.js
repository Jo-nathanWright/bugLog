import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { Bug } from '../models/bug'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);

  Bugs = mongoose.model('Bug', Bug)
}

export const dbContext = new DbContext()
