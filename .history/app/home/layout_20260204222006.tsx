"use client"

import { useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../pages/api/firebase';

import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/sidebarTrigger"
import { AppSidebar } from "@/components/appSidebar"
import { ErrorPage } from "@/components/error"

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
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        ) : (
        <ErrorPage />
      )}
    </div>
  )
}