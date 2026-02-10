"use client";
import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/sidebarTrigger"
import { AppSidebar } from "@/components/appSidebar"
import { Welcome } from "@/components/welcome";
import { ChatPage } from "@/components/chat";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../pages/api/firebase';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [activeChat, setActiveChat] = useState<number | null>(null);

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
        <AppSidebar activeChat={activeChat} setActiveChat={setActiveChat} />
        <SidebarTrigger />
        {activeChat ? <ChatPage activeChat={activeChat} /> : <Welcome />}
      </SidebarProvider>
      
    </main>
  )
}