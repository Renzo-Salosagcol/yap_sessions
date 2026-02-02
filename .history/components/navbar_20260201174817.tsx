import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from "@/components/ui/sidebar"

export const Navbar = () => {
  return (
    <nav className="w-full h-16 items-start fixed top-0 left-0 p-8">
      <SidebarProvider>
        
      </SidebarProvider>
    </nav>
  );
}