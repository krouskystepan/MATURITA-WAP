import mongoose, { Schema, Document } from 'mongoose'

interface JuiceInterface extends Document {
  company: string
  type: string
  price: number
}

const juiceSchema: Schema<JuiceInterface> = new Schema({
  company: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
})

const Juice = mongoose.model<JuiceInterface>('Juice', juiceSchema)

export default Juice
