import mongoose, { Schema, Document } from 'mongoose'

interface CameramanInterface extends Document {
  name: string
  salary: number
  camera: string
}

const cameramanSchema: Schema<CameramanInterface> = new Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
  camera: { type: String, required: true },
})

const Cameraman = mongoose.model<CameramanInterface>(
  'Cameraman',
  cameramanSchema
)

export default Cameraman
