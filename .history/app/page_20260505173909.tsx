"use client";

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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { LoginForm } from "@/components/loginForm";
import { RegisterForm } from "@/components/registerForm";

import { useState, useEffect, FormEvent } from "react";
import { resolve } from "path";

const EXPRESS_SERVER_URL = process.env.EXPRESS_SERVER_URL || "http://localhost:3001";

export default function Home() {

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const payload = {
      username: username,
      test: "This is a test payload",
    };
    const response = await fetch(EXPRESS_SERVER_URL.toString(), {
      method: 'POST',
      body: JSON.stringify({username}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
    if (response.ok) {
      console.log(response);
    } else {
      console.error("Form submission failed:", response.statusText);
    }
  }

  return (
    <main className="root-page-element mx-40 my-auto">
      <div className="gradient-border w-full h-full">
        <Card className="w-full h-fit">
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
                <LoginForm />
              </TabsContent>
              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>
            <form method="POST" onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" id="test" name="username"></input>
              <Button type="submit" class="cursor-pointer:hover bg-black text-white rounded-md p-5">Test</Button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </main>
  );
}
