import mongodb from "mongodb";
import "dotenv/config.js";
const { MongoClient, ObjectId } = mongodb;
const client = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export { client as default, ObjectId };
