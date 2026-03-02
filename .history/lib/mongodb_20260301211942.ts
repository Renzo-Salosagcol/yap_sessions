const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_DB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    return console.error("Failed to connect to MongoDB Atlas. Please check your connection settings and try again.");
  }

  const database = client.db(process.env.MONGO_DB_DATABASE);
  const collection = database.collection(process.env.MONGO_DB_COLLECTION);
}

run();