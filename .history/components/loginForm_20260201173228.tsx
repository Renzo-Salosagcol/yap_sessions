import { FormEvent } from "react";
import { useRouter } from "next/navigation";

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

export const LoginForm = () => {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const loginData = new FormData(event.currentTarget)
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({
        email: loginData.get('email'),
        password: loginData.get('password'),
      }),
    })

    if (!response.ok) {
      // Handle error response
      console.error("Login failed:", response.statusText)
      return
    } else {
      console.log("Login successful")
      router.push('/home')
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