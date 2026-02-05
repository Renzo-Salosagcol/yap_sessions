import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginForm = () => {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const loginData = new FormData(event.currentTarget)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginData.get('email'), loginData.get('password')).then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in:", user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during login:", errorCode, errorMessage);
    })

  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input id="email" name="email" type="email" required />
            <FieldError>Valid email is required.</FieldError>
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" required />
            <FieldError>Password is required.</FieldError>
          </Field>
        </FieldGroup>
        <FieldSeparator />
        <FieldGroup>
          <Button type="submit">Login</Button>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}