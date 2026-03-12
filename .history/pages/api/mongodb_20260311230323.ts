import { MongoClient } from "mongodb";

console.log("MongoClient created with URI:", process.env.MONGO_DB_URI);
const client = new MongoClient(process.env.MONGO_DB_URI || "");

async function run() {
  try {
    console.log("MongoClient created with URI:", process.env.MONGO_DB_URI);
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    return console.error("Error connecting to MongoDB Atlas:", error);
  }

  const database = client.db(process.env.MONGO_DB_DATABASE || "");
  const collection = database.collection(process.env.MONGO_DB_COLLECTION || "");
}

run();

export default client;