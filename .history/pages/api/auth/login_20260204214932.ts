import type { NextApiRequest, NextApiResponse } from 'next'
import { app } from '../firebase';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body;

    res.status(200).json({ "success": true });
    return;
  } catch (error) {
    if (error == 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}