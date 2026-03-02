import client from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      client.connect();
      const { message } = req.body;
      const db = client.db(process.env.MONGO_DB_DATABASE);
      const collection = db.collection(process.env.MONGO_DB_COLLECTION);
      const result = await collection.insertOne({ message });
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}