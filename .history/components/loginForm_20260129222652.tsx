import { FormEvent } from "react";

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
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const loginData = new FormData(event.currentTarget)
    const response = await fetch('/api/login', {
      method: 'POST',
      body: loginData
    })

    // Handle the response as needed
    const data = await response.json()
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input id="email" name="email" type="email" required />
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" name="password" type="password" required />
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