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
      <SidebarHeader className="bg-background ">
        <div className="gradient-boder flex items-center justify-center">
          <User className="text-4xl m-2" />
          <div>{user?.displayName}</div>
          <div className="font-bold text-lg mb-2">
            <Button onClick={handleSignOut}>Sign Out</Button>
          </div>
        </div>
      </SidebarHeader>
      <Separator className="my-2 shadow" />
      <div className="gradient-border m-1">
        <SidebarContent className="text-6xl bg-background rounded-xl">
          test
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </div>
      <div className="gradient-border m-1 ">
        <SidebarFooter className="bg-background bottom-0 rounded-xl">
          Footer
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}