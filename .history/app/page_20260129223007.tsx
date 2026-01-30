import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { FormEvent } from "react";

export default function Home() {
  async function loginSubmit(event: FormEvent<HTMLFormElement>) {
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
    <main className="root-page-element">
      <div className="min-w-1/2 gradient-border">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Welcome to  
              <span className="gradient-text"> Yap Sessions!</span>
              </CardTitle>
            <CardDescription className="text-center font-semibold mt-2">
              Yap Sessions is a
              <span className="gradient-text"> full stack web application </span>
              designed to facilitate
              <span className="gradient-text"> real-time communication </span>
              using
              <span className="gradient-text"> WebSockets</span>.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <Tabs defaultValue="login"
              className="w-full"
            >
              <TabsList className="w-full justify-center mb-4">
                <TabsTrigger value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger value="register">
                  Register
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={loginSubmit}>
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
              </TabsContent>
              <TabsContent value="register">
                Register
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </main>
  );
}
