"use client";
import { useRouter } from "next/navigation";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <main className="root-page-element">
      <h1 className="text-4xl gradient-text">
        Error
      </h1>
    </main>
  )
}