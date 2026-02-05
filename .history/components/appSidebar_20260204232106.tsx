"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { app } from "@/pages/api/firebase";

import { getAuth, signOut } from "firebase/auth";
import { User } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

const auth = getAuth(app);
const user = auth.currentUser;

const testChats = [
  { id: 1, name: "Chat 1", recents: {message: "Hello there!", time: "10:00 AM", user: "user 1"} },
  { id: 2, name: "Chat 2", recents: {message: "How are you?", time: "11:00 AM", user: "user 2"} },
  { id: 3, name: "Chat 3", recents: {message: "Goodbye!", time: "12:00 PM", user: "user 3"} },
]

export function AppSidebar() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(user ? user.displayName : "GUEST");

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      router.push('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Sidebar className="bg-background text-foreground h-full min-h-screen">
      <SidebarHeader className="bg-background flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <User className="text-4xl m-2" />
          <div className="font-semibold gradient-text">{user?.displayName?.toUpperCase()}</div>
        </div>
        <Button onClick={handleSignOut} size="sm" className="p-2">Sign Out</Button>
      </SidebarHeader>
      <Separator className="my-2 shadow"/>
      <SidebarContent className="bg-background w-full h-full p-1">
        {testChats.map((chat) => (
          <SidebarGroup key={chat.id} className="gradient-border p-1/2 mx-auto">
            <Button className="w-full rounded-xl flex flex-col items-center justify-center bg-background hover:bg-background text-foreground py-8">
              <div className="flex flex-row justify-between w-full">
                <div className="">
                  {chat.name}
                </div>
                <div>
                  {chat.recents.time}
                </div>
              </div>
              <div className="items-start w-full text-sm text-muted-background mt-0">
                {chat.recents.user}: {chat.recents.message}
              </div>
            </Button>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}