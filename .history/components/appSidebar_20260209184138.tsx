"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { app } from "@/pages/api/firebase";
import { X, Settings } from "lucide-react"

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../pages/api/firebase';
import { User } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";

const testChats = [
  { id: 1, name: "Chat 1", recents: {message: "Hello there!", time: "10:00 AM", user: "user 1"} },
  { id: 2, name: "Chat 2", recents: {message: "How are you?", time: "11:00 AM", user: "user 2"} },
  { id: 3, name: "Chat 3", recents: {message: "Goodbye!", time: "12:00 PM", user: "user 3"} },
  { id: 4, name: "Chat 4", recents: {message: "See you later!", time: "1:00 PM", user: "user 4"} },
  { id: 5, name: "Chat 5", recents: {message: "What's up?", time: "2:00 PM", user: "user 5"} },
  { id: 6, name: "Chat 6", recents: {message: "Let's meet!", time: "3:00 PM", user: "user 6"} },
  { id: 7, name: "Chat 7", recents: {message: "Happy Birthday!", time: "4:00 PM", user: "user 7"} },
  { id: 8, name: "Chat 8", recents: {message: "Congratulations!", time: "5:00 PM", user: "user 8"} },
  { id: 9, name: "Chat 9", recents: {message: "Good luck!", time: "6:00 PM", user: "user 9"} },
  { id: 10, name: "Chat 10", recents: {message: "Best wishes!", time: "7:00 PM", user: "user 10"} }
]

export function AppSidebar({ activeChat, setActiveChat }: { activeChat: number | null, setActiveChat: (chatId: number) => void }) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const { toggleSidebar } = useSidebar()
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });
  
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
    <Sidebar className="bg-background text-foreground h-full min-h-screen ">
      <SidebarHeader className="bg-background flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <User className="text-4xl m-2" />
          <div className="font-semibold gradient-text">{user?.displayName?.toUpperCase()}</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button onClick={handleSignOut} size="sm" className="p-2"><Settings /></Button>
          <Button onClick={toggleSidebar} variant="ghost" className="top-0 right-0"><X /></Button>
        </div>
      </SidebarHeader>
      <Separator className="my-2 shadow"/>
      <SidebarContent className="bg-background w-full h-full p-1">
        {testChats.map((chat) => (
          <SidebarGroup key={chat.id} className="gradient-border p-1/2 mx-auto">
            <Button className="w-full rounded-xl flex flex-col items-center justify-center bg-background hover:bg-background text-foreground py-8"
            onClick={() => setActiveChat(chat.id)}
            >
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