import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { z } from 'zod'
import { create } from 'domain';

const schema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(6).max(100),
  // password: z.string().min(6).max(100).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/),
})
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = schema.parse(req.body)

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed Up
      const user = userCredential.user;
      console.log("User registered:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during registration:", errorCode, errorMessage);
    });


  res.status(200).json({ "test": "register api route works" })
}