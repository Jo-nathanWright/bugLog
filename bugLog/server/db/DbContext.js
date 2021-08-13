import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { Bug } from '../models/bug'
import { Note } from '../models/note'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Bugs = mongoose.model('Bug', Bug)

  Notes = mongoose.model('Note', Note)
}

export const dbContext = new DbContext()
