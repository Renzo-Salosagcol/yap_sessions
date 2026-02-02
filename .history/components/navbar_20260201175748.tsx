import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full h-16 items-start fixed top-0 left-0 p-8">
      <SidebarProvider>
        <Button variant="ghost" className="p-0">
          <Menu />
        </Button>
      </SidebarProvider>
    </nav>
  );
}