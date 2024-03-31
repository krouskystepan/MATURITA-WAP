import mongoose, { Schema, Document } from 'mongoose'

interface UserInterface extends Document {
  firstName: string
  lastName: string
  age: number
}

const userSchema: Schema<UserInterface> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
})

const User = mongoose.model<UserInterface>('User', userSchema)

export default User
