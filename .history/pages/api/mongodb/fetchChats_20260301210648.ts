import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
 if (req.method === 'GET') {
   try {
     const client = await clientPromise;
     const db = client.db('WebChats');
     const collection = await db.collection('YapSessionsWebChats').find({}).toArray();
     const data = await db.collection('YapSessionsWebChats').find({chatID: req.query.chatID}).toArray();
     res.status(200).json(data);
   } catch (error) {
     res.status(500).json({ error: 'Failed to fetch data' });
   }
 } else {
   res.status(405).json({ error: 'Method not allowed' });
 }
}