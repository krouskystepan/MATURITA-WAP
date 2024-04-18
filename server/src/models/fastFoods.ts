import mongoose, { Schema, Document } from 'mongoose'

interface FastFoodInterface extends Document {
  company: string
  menu: string
  price: number
}

const fastFoodSchema: Schema<FastFoodInterface> = new Schema({
  company: { type: String, required: true },
  menu: { type: String, required: true },
  price: { type: Number, required: true },
})

const FastFood = mongoose.model<FastFoodInterface>('FastFood', fastFoodSchema)

export default FastFood
