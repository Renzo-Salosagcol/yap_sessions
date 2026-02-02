import { FormEvent } from "react";
import { redirect } from 'next/navigation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

export const RegisterForm = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const registerData = new FormData(event.currentTarget)
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({
        email: registerData.get('email'),
        username: registerData.get('username'),
        password: registerData.get('password'),
      }),
    })

    if (!response.ok) {
      // Handle error response
      console.error("Registration failed:", response.statusText)
      return
    } else {
      console.log("Registration successful")
      redirect('/home/home')
    }
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
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" name="username" type="text" required />
            <FieldError>Username is required.</FieldError>
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
          <Button type="submit">Register</Button>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}