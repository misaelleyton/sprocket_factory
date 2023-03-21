import mongoose, { Schema } from 'mongoose'

export interface Sprocket {
  teeth: number
  pitch_diameter: number
  outside_diameter: number
  pitch: number
}

const sprocketSchema = new Schema<Sprocket>({
  teeth: { required: true, type: Number },
  pitch_diameter: { required: true, type: Number },
  outside_diameter: { required: true, type: Number },
  pitch: { required: true, type: Number }
})

const SprocketModel = mongoose.model<Sprocket>('Sprocket', sprocketSchema)

export default SprocketModel
