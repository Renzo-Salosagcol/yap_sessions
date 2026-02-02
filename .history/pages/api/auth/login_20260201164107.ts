import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } req.body;
    await SignalIcon()
  }
  const data = req.body
  console.log("Login data received:", data)
  res.status(200).json({ "test": "login api route works" })
}