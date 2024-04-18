import mongoose, { Schema, Document } from 'mongoose'

interface WizardInterface extends Document {
  name: string
  stick: string
  age: number
}

const wizardSchema: Schema<WizardInterface> = new Schema({
  name: { type: String, required: true },
  stick: { type: String, required: true },
  age: { type: Number, required: true },
})

const Wizard = mongoose.model<WizardInterface>('Wizard', wizardSchema)

export default Wizard
