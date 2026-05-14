"use client"

import { useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../pages/api/firebase';
import { io } from "socket.io-client";

import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/sidebarTrigger"
import { AppSidebar } from "@/components/appSidebar"
import { ErrorPage } from "@/components/error"

const EXPRESS_SERVER_URL = process.env.EXPRESS_SERVER_URL || "wss://localhost:3001";

const socket = io(EXPRESS_SERVER_URL);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);


  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  })
  
  return (
    <div>
      {isSignedIn ? (
        <main>
          {children}
        </main>
        ) : (
        <ErrorPage />
      )}
    </div>
  )
}