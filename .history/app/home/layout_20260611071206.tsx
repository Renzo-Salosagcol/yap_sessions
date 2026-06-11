"use client"

import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../pages/api/firebase';

import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/sidebarTrigger"
import { AppSidebar } from "@/components/appSidebar"
import { ErrorPage } from "@/components/error"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

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