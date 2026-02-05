"use client";
import { useRouter } from "next/navigation";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <main className="root-page-element">
      Error
    </main>
  )
}