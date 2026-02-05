"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <main className="root-page-element">
      <h1 className="text-4xl gradient-text">
        Error
      </h1>
      <h3>No signed in user detected. Please sign in to continue.</h3>
      <Button onClick={() => router.push('/')}>Sign In</Button>
    </main>
  )
}