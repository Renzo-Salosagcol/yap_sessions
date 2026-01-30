import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  console.log("Login data received:", data)
  res.status(200).json({ "test": "login api route works" })
}