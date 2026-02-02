import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { app } from "@/pages/api/firebase";

import { getAuth, signOut } from "firebase/auth";
import { User } from "lucide-react"

const auth = getAuth(app);
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  const uid = user.uid;
  // ...
} else {
  // No user is signed in.
}

export function AppSidebar() {
  return (
    <Sidebar className="bg-background text-foreground h-full min-h-screen">
      <SidebarHeader className="bg-background rounded-xl m-1">
        <div className="gradient-boder flex items-center justify-center">
          <User className="text-4xl m-2" />
          <div className="font-bold text-lg mb-2">user.email</div>
        </div>
      </SidebarHeader>
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