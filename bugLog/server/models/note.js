import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Note = new Schema(
  {
    body: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: 'Bug', required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Note.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true
})
Note.virtual('Bug', {
  ref: 'Bug',
  localField: 'bug',
  foreignField: 'id',
  justOne: true
})
