import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/next-app')
    console.log('database connected successfuly')
  } catch (error) {
    throw new Error('Connection to database failed!')
  }
}

export default dbConnect