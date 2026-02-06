"use client";
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/sidebarTrigger"
import { AppSidebar } from "@/components/appSidebar"

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../pages/api/firebase';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [signedIn, setSignedIn] = useState<boolean>(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  })
  
  return (
    <main className="root-page-element flex items-center justify-center w-full">
      <SidebarProvider className="absolute top-0 left-0 h-full">
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>
      <div className="flex items-center w-full justify-center min-h-screen">
          <h1 className="text-4xl font-bold">Welcome to <span className="gradient-text">Yap Sessions</span></h1>
      </div>
    </main>
  )
}