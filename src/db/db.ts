import mongoose from 'mongoose'

async function connect() {
  const mongoUrl = process.env.MONGO_URI || ''
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoUrl)
    console.log('Database connected successfully')
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error connecting to database: ${error.message}`)
    } else {
      console.log('Unexpected error', error);
    }
    process.exit(1)
  }
}

export { connect }
