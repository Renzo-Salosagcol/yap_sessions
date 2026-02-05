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

const auth = getAuth(app);
const user = auth.currentUser;



export function AppSidebar() {
  const router = useRouter();

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
          <div className="font-semibold gradient-text">{user?.displayName}</div>
        </div>
        <Button onClick={handleSignOut} size="sm" className="p-2">Sign Out</Button>
      </SidebarHeader>
      <Separator className="my-2 shadow"/>
      <div className="gradient-border m-1">
        <SidebarContent className="text-6xl bg-background rounded-xl min-h-screen">
          test
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </div>
      <Separator className="my-2 shadow"/>
      <SidebarFooter className="bg-background bottom-0 rounded-xl">
        Footer
      </SidebarFooter>
    </Sidebar>
  )
}