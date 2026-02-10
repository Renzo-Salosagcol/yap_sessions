"use client"

import { useRouter } from "next/navigation";

export default function Settings() {
const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-4xl font-bold">Settings Page</h1>
    </div>
  )
}