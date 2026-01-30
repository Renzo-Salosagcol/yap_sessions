import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(6).max(100).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/),
})
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = schema.parse(req.body)

  const auth = getAuth();
  console.log("Register data received:", data)
  res.status(200).json({ "test": "register api route works" })
}