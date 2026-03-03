"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { app } from "@/pages/api/firebase";
import { X, Settings, LogOut, Search, Plus } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../pages/api/firebase';
import { User } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";

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
  const [chats, setChats] = useState(testChats);

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

  const handleProfile = () => {
    router.push('/profile');
  }

  const searchChats = (query: string) => {
    const filteredChats = testChats.filter(chat => chat.name.toLowerCase().includes(query.toLowerCase()));
    setChats(filteredChats);
  }

  return (
    <Sidebar className="bg-background text-foreground h-full min-h-screen z-11">
      <SidebarHeader className="bg-background flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <HoverCard>
            <HoverCardTrigger>
              <Button onClick={handleProfile} variant="ghost" size="icon" className="p-2">
                <User size={32}/>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="hover-content">
              Profile
            </HoverCardContent>
          </HoverCard>
          <div className="font-semibold gradient-text">{user?.displayName?.toUpperCase()}</div>
        </div>
        <div className="flex flex-row gap-1 text-foreground">
          <HoverCard>
            <HoverCardTrigger>
              <Button onClick={handleSignOut} variant="ghost" size="icon" className="p-2">
                <LogOut size={32} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="hover-content">
              Sign Out
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger>
              <Button onClick={toggleSidebar} variant="ghost" className="top-0 right-0">
                <X size={32} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="hover-content">
              Close Sidebar
            </HoverCardContent>
          </HoverCard>
        </div>
      </SidebarHeader>
      <Separator className="m-0 p-0 shadow"/>
      <SidebarContent className="bg-background w-full h-full p-1">
        {chats.map((chat) => (
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
      <Separator className="m-0 p-0 shadow"/>
      <SidebarFooter className="bg-background p-2">
        <div className="flex flex-row items-center gap-2">
          <div className="gradient-border w-full">
            <Input id="search-message" type="text" placeholder="Search chats..." 
            className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background" 
            onChange={(e) => searchChats(e.target.value)}/>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gradient text-background p-2">
                <Plus size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Start a new chat</DialogTitle>
                <DialogDescription>
                  Enter the name of the chat you want to start.
                </DialogDescription>  
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">Chat Name</label>
                  <Input id="name" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Continue</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}