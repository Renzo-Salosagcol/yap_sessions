"use client";
import { useRouter } from "next/navigation";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <main className="root-page-element">
      <h1 className="text-4xl gradient-text">
        Error
      </h1>
      <h3>No signed in user detected. Please sign in to continue.</h3>
    </main>
  )
}