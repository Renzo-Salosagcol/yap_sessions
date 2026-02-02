import type { NextApiRequest, NextApiResponse } from 'next'
import { auth, signInWithEmailAndPassword } from '../firebase';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;
    await signInWithEmailAndPassword(auth, email, password);

    res.status(200).json({ message: 'Login successful' });
    return;
  }
  const data = req.body
  console.log("Login data received:", data)
  res.status(200).json({ "test": "login api route works" })
}