import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="bg-background text-foreground">
      <div>
        <SidebarContent className="text-6xl bg-background">
          test
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
      </div>
      
      <SidebarFooter className="bg-background"/>
    </Sidebar>
  )
}