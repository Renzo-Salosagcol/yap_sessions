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
  } catch (error) {
    if (error == 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}