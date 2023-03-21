import mongoose, { Schema } from 'mongoose'

export interface Factory {
  chart_data: [{
    sprocket_production_actual: number
    sprocket_production_goal: number
    time: number
  }]
}

const factorySchema = new Schema<Factory>({
  chart_data: [{
    sprocket_production_actual: { type: Number, required: true },
    sprocket_production_goal: { type: Number, required: true },
    time: { type: Number, required: true }
  }]
})

const FactoryModel = mongoose.model<Factory>('Factory', factorySchema)

export default FactoryModel
