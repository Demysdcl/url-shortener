import mongoose from 'mongoose';

export default class MongoConnection {
  public async connect(): Promise<void> {
    try {
      console.log(process.env.MONGO_URL)
      await mongoose.connect(process.env.MONGO_URL)
      console.log('Database connected');

    } catch (error) {
      console.error(error.message);

    }
  }

}
