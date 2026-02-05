"use client";

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
    <main className="root-page-element flex items-center justify-center w-full gradient">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>
      <div className="flex items-center justify-center min-h-screen">
        Test
      </div>
    </main>
  )
}